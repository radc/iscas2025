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
          <h2>Quantization-Aware SSF Hyper Prior Decoding for Cross-Platform Neural Video Applications</h2>
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
        In this paper, we first demonstrated that current
        learning-based video codecs, specifically the SSF codec, are not
        suitable for real-world applications due to the mismatch between
        the encoder and decoder caused by floating-point round-off
        errors. To address this issue, we proposed a static quantization of
        the hyper prior decoding path. The quantization parameters were
        determined through an exhaustive search of all possible combinations
        of observers and quantization schemes. When encoding
        and decoding were performed on the same machine, the proposed
        solution resulted in an average BD-rate increase of 9.93% for
        the SSF codec, while effectively mitigating the mismatch issue.
        When encoding and decoding on different machines, the proposed
        solution can enhance compression efficiency results by preventing
        severe image quality degradation. Finally, we discussed how
        replacing floating-point operations with integer ones could offer
        the additional benefit of reduced power dissipation in future
        hardware designs.
      </p>
    </div>
  );
}

export default App;
