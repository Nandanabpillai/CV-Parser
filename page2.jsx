import React from 'react';
import './style.css'; // Make sure to import your stylesheet(s)
import './style.css'
export default function Page2() {
  return (
    <div>

      <div className="page2-container">
        <div className="page2-page2">
          <img
            src="/external/ellipse11026-pzpq-600h.png"
            alt="Ellipse11026"
            className="page2-ellipse1"
          />
          <img
            src="/external/ellipse21027-yem-300h.png"
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
                          <span>Browse files</span>
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
              className="pa3ge2-download1"
            />
            <span className="page2-text04">
              <span className="page2-text05">
                <span>Drag and drop your file here</span>
                <br />
                <span></span>
              </span>
              <span>
                <span>Limit 200 MB per file PDF,JPG</span>
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

export default Page2;
