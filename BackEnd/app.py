from flask import Flask, request, make_response, send_file
from werkzeug.utils import secure_filename
import os
import pandas as pd
from sklearn.preprocessing import LabelEncoder, MinMaxScaler
import numpy as np
from keras.models import model_from_json
import pickle
import zipfile
from flask_pymongo import PyMongo
import matplotlib as mpl
mpl.use('Agg')
import matplotlib.pyplot as plt
from io import BytesIO

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/Database"
mongo = PyMongo(app)

UPLOAD_FOLDER = '/Users/amalshar/Desktop/ForecaStory-FinalYearProject/BackEnd/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Define the predictions folder
PREDICTIONS_FOLDER = '/Users/amalshar/Desktop/ForecaStory-FinalYearProject/BackEnd/predictions'
app.config['PREDICTIONS_FOLDER'] = PREDICTIONS_FOLDER

@app.route('/process', methods=['POST'])
def process_file():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    # Load your model here
    model = load_model()

    # Process the file
    df = pd.read_csv(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    original_df = df.copy()
    df = preprocess(df)
    
    # Convert numpy array back to DataFrame
    df = pd.DataFrame(df)
    
    # Reshape the input data to match the input shape expected by the model
    df_reshaped = np.reshape(df, (df.shape[0], 1, df.shape[1]))
    
    predictions = model.predict(df_reshaped)
    
    # Ensure predictions is a 1-dimensional array
    predictions = predictions.flatten()
    
    # Round off the predictions to the nearest whole number
    predictions = np.round(predictions)
    
    # Create a plot
    plt.figure(figsize=(10, 6))
    plt.plot(predictions)
    plt.title('Predictions')
    plt.xlabel('Index')
    plt.ylabel('Predicted Order Qty')
    plt.grid(True)
    plt.savefig(os.path.join(app.config['PREDICTIONS_FOLDER'], 'predictions_plot.png'))

    # Ensure df is not empty before assigning a new column
    if not df.empty:
        df['Predicted Order Qty'] = predictions

    # Save the dataframe to a CSV file in the predictions folder
    df.to_csv(os.path.join(app.config['PREDICTIONS_FOLDER'], 'predictions.csv'), index=False)
    
    # Add the 'Predicted Order Qty' column to the original data and save it
    original_df['Predicted Order Qty'] = predictions
    original_df.to_csv(os.path.join(app.config['PREDICTIONS_FOLDER'], 'original_with_predictions.csv'), index=False)
    
    # Insert the data into MongoDB
    mongo.db.collection.insert_many(original_df.to_dict('records'))
    
    #  # Create a zip file containing the two CSV files
    # with zipfile.ZipFile(os.path.join(app.config['PREDICTIONS_FOLDER'], 'output.zip'), 'w') as zipf:
    #     zipf.write(os.path.join(app.config['PREDICTIONS_FOLDER'], 'predictions.csv'))
    #     zipf.write(os.path.join(app.config['PREDICTIONS_FOLDER'], 'original_with_predictions.csv'))
    #     zipf.write(os.path.join(app.config['PREDICTIONS_FOLDER'], 'predictions_plot.png'))

    # return {'downloadUrl': '/download/output.zip'}
    
    # Create a zip file containing the CSV files and plot
    output_files = [
        os.path.join(app.config['PREDICTIONS_FOLDER'], 'predictions.csv'),
        os.path.join(app.config['PREDICTIONS_FOLDER'], 'original_with_predictions.csv'),
        os.path.join(app.config['PREDICTIONS_FOLDER'], 'predictions_plot.png')
    ]
    zip_data = BytesIO()
    with zipfile.ZipFile(zip_data, 'w') as zipf:
        for file in output_files:
            zipf.write(file, os.path.basename(file))

    zip_data.seek(0)

    return get_file(send_file(
        zip_data,
        mimetype='application/zip',
        as_attachment=True,
        download_name='output.zip'
    ))
    
@app.route('/getfile')
def get_file(file):
    # Get the file path
    file_path = 'path_to_your_file'

    # Send the file
    response = make_response(file)

    # Add CORS headers
    response.headers['Access-Control-Allow-Origin'] = '*'  # Or specific origins

    return response

def load_model():
    # Load your model here
    json_file = open('cnnlstm_model.json', 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json)
    loaded_model.load_weights("cnnlstm_model.weights.h5")
    return loaded_model

def preprocess(df):
    # Load columns
    with open('columns.pkl', 'rb') as f:
        columns = pickle.load(f)

    # Preprocess your dataframe here
    df = df.drop_duplicates()

    # Convert date columns to datetime objects
    datetime_columns = ['Req.Delivery Date', 'RM In Date', 'Planned Cut Date', 'Original Ex.Factory Date', 'Revised Ex.Factory Date']
    for column in datetime_columns:
        df[column] = pd.to_datetime(df[column])

    # Feature engineering
    df['Production Lead Time'] = (df['Original Ex.Factory Date'] - df['Planned Cut Date']).dt.days
    df['Revised Original Date Difference'] = (df['Revised Ex.Factory Date'] - df['Original Ex.Factory Date']).dt.days

    # Extract year, month, day of the 'Req.Delivery Date' column
    df['Order Day'] = df['Req.Delivery Date'].dt.day
    df['Order Year'] = df['Req.Delivery Date'].dt.year
    df['Order Month'] = df['Req.Delivery Date'].dt.month

    # Initialize a label encoder
    le = LabelEncoder()

    # Select columns to encode
    columns_to_encode = ['Dist.Chl.Name', 'Material Group', 'FG Type', 'FG Type Desc.', 'Construction', 'Fabrication', 
                         'Design Source', 'Business Source', 'Customer Group', 'Customer', 'Gender', 'Global Style', 
                         'FG SKU', 'Cust.Color Code', 'Size', 'Season', 'Sales Unit', 'SO Doc.Currency', 'Destination', 
                         'Program Type', 'Program Type Desc.']

    # Apply the label encoder to each column
    for column in columns_to_encode:
        df[column] = le.fit_transform(df[column])

    # Convert datetime columns to Unix timestamp
    for column in datetime_columns:
        df[column] = pd.to_datetime(df[column]).astype(int) / 10**9
    
    # Scale the features
    scaler = MinMaxScaler(feature_range=(0, 1))

    X_scaled = scaler.fit_transform(df)

    return X_scaled

if __name__ == '__main__':
    app.run(port=5050)
