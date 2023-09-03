import React, { useState } from 'react';
import axios from 'axios';
import './page2.css'

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [card, setCard] = useState('no')

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0])
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://localhost:8000/upload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        console.log('Upload successful:', response.data);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
  };

  return (
    <div>
      <div className="page2-container">
        <div className="page2-page2">
          <img
            src="public/external/ellipse11026-pzpq-600h.png"
            alt="Ellipse11026"
            className="page2-ellipse1"
          />
          <img
            src="public/external/ellipse21027-yem-300h.png"
            alt="Ellipse21027"
            className="page2-ellipse2"
          />
          <span className="page2-text">
            <span>Upload CV in PDF or image format!!</span>
          </span>
          <div className="page2-frame2">
            <div className="page2-frame5">
              <div className="page2-frame4">
                <div className="page2-upper-section">
                  <div className="page2-credentials">
                    <div className="page2-loginbt-fp">
                      <div className="page2-login">
                        <span className="page2-text02">
                          <input type="file" onChange={handleFileChange} />
                          <button className='upbutton' onClick={handleUpload}>Upload</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="public/external/download11031-kw5w-200w.png"
              alt="download11031"
              className="page2-download1"
            />
            <span className="page2-text04">
              <span className="page2-text05">
                <span>Drag and drop your file here</span>
                <br />
                <span></span>
              </span>
              <span>
                <span>Limit 200 MB per file</span>
                <br />
                <span></span>
              </span>
            </span>
          </div>
          <div className="page2-frame11"></div>
        </div>
      </div>
    </div>
  );
}

export default Upload;