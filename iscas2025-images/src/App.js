// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Images from './Images'; // Import the new Images component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Cross-Platform Neural Video Coding: A Case Study</h2>
          <nav>
            {/* Navigation Links */}
            <Link to="/">Home</Link>
            <Link to="/images">Rec. Images</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/images" element={<Images />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Home Component (Home Page)
function Home() {
  return (
    <div className="Home">      
      <p>
      In this paper, we first show that current learning-based video codecs, specifically the SSF codec, are not suitable for real-world applications due to the mismatch between the encoder and decoder caused by floating-point round-off errors. To address this issue, we propose the static quantization of the hyper prior decoding path. The quantization parameters are determined through an exhaustive search of all possible combinations of observers and quantization schemes from PyTorch. For the SSF codec, when encoding and decoding on different machines, the proposed solution effectively mitigates the mismatch issue and enhances compression efficiency results by preventing severe image quality degradation. When encoding and decoding are performed on the same machine, it constrains the average BD-rate increase to 9.93% and 9.02% for UVG and HEVC-B sequences, respectively.
      </p>
    </div>
  );
}

export default App;
