from flask import Flask, request, send_from_directory
from werkzeug.utils import secure_filename
import os
import pandas as pd
from sklearn.preprocessing import LabelEncoder, MinMaxScaler
from sklearn.impute import SimpleImputer
from sklearn.model_selection import train_test_split
import numpy as np
from keras.models import model_from_json

app = Flask(__name__)

UPLOAD_FOLDER = '/path/to/upload/directory'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

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
    df = preprocess(df)
    predictions = model.predict(df)

    # Save the predictions to a CSV file
    predictions.to_csv(os.path.join(app.config['UPLOAD_FOLDER'], 'output.csv'))

    return {'downloadUrl': '/download/output.csv'}

@app.route('/download/<path:filename>', methods=['GET', 'POST'])
def download(filename):
    return send_from_directory(directory=app.config['UPLOAD_FOLDER'], filename=filename)

def load_model():
    # Load your model here
    json_file = open('demand_forecast_lstm_model.json', 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json)
    loaded_model.load_weights("demand_forecast_lstm_model.weights.h5")
    return loaded_model

def preprocess(df):
    # Preprocess your dataframe here
    # This is just a placeholder
    return df

if __name__ == '__main__':
    app.run(port=5059)
