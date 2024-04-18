import React, { useState } from 'react';
import axios from 'axios';
import './PredictForecast.css';

function PredictForecast() {
  const [fileName, setFileName] = useState(null);
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [predictionsData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type !== 'text/csv') {
      alert('Invalid file type. Please upload a CSV file.');
      return;
    }
    setFile(file);
    setFileName(file.name); 
  };  

  const handleProcess = async () => {
    if (!file) {
      alert('Please upload a file first.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await axios.post('/process', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'blob'
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.zip');
      document.body.appendChild(link);
      link.click();
  
      // Update the downloadUrl state variable
      setDownloadUrl(url);
    } catch (error) {
      console.error('Error processing file:', error);
      alert('An error occurred while processing the file.');
    }
  };

  return (
    <div className="predict-forecast">
      <h1>Future Demand Forecast Prediction</h1>
      <p>This will allow you to predict future demand based on historical data. Upload a CSV file with your data, and it will process it and provide a forecast.</p>
      <div className="input-output-container">
        <div className="input-section">
          <h1>Upload Data</h1>
          <label className="file-upload-container">
            <input type="file" onChange={handleFileUpload} />
            <span className="file-upload-button">Choose File</span>
          </label>
          {fileName && <p>Selected file: {fileName}</p>}
          <div className="button-container">
            <button onClick={handleProcess}>Predict</button>
          </div>
        </div>
        <div className="output-section">
          <h1>Output</h1>
          {predictionsData && (
            <div>
              <h3>Predictions:</h3>
              <pre>{predictionsData}</pre>
            </div>
          )}
          <div className="button-container">
          {downloadUrl && (<a href={downloadUrl} className="download-link" download="output.zip">Download Output</a>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictForecast;
