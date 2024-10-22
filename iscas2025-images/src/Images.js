// src/Images.js
import React, { useState, useEffect } from 'react';
import './Images.css';

function Images() {
  // Defining options for the selectors
  const sequences = ['Beauty', 'Bosphorus', 'HoneyBee', 'Jockey', 'ReadySteadyGo', 'ShakeNDry', 'YachtRide'];
  const qualities = Array.from({ length: 9 }, (_, i) => i + 1);
  const frames = Array.from({ length: 9 }, (_, i) => i + 1);
  const types = ['Quantized', 'Non-Quantized'];
  const platforms = ['Same Platform', 'Cross Platform'];

  // States to store selections
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedQuality, setSelectedQuality] = useState(1);
  const [selectedSequence, setSelectedSequence] = useState(sequences[0]);
  const [selectedFrame, setSelectedFrame] = useState(1);
  const [path, setPath] = useState('');

  // States to manage the Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  // Function to update the 'path' string whenever a selection changes
  useEffect(() => {
    const q = selectedQuality;
    const v = sequences.indexOf(selectedSequence); // 1-based index
    const f = selectedFrame;
    const basePath = `quality_${q}_video_${v}_frame_${f}.png`;

    // Determine the path prefix based on type and platform selections
    let prefix = '/images';
    if (selectedType === 'Quantized') {
      prefix += '/quant';
    } else {
      prefix += '/non_quant';
    }

    if (selectedPlatform === 'Same Platform') {
      prefix += '/rec/';
    } else {
      prefix += '/rec_mac/';
    }

    const newPath = `${prefix}${basePath}`;
    setPath(newPath);
    console.log(newPath);
  }, [
    selectedSequence,
    selectedQuality,
    selectedFrame,
    selectedType,
    selectedPlatform,
    sequences
  ]);

  // Function to open the Modal with the selected image
  const openModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  // Function to close the Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc('');
  };

  // Function to close the Modal when pressing the 'Esc' key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="Images">
      <header className="Images-header">
        <h2>Reconstructed Images Page</h2>
        {/* <p>Welcome to the Images page!</p> */}

        <div className="selectors">
          {/* Platform Selector */}
          <div className="selector">
            <label htmlFor="platform">Platform:</label>
            <select
              id="platform"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              {platforms.map((platform, index) => (
                <option key={index} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>

          {/* Type Selector */}
          <div className="selector">
            <label htmlFor="type">Type:</label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Quality Selector */}
          <div className="selector">
            <label htmlFor="quality">Quality:</label>
            <select
              id="quality"
              value={selectedQuality}
              onChange={(e) => setSelectedQuality(Number(e.target.value))}
            >
              {qualities.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          {/* Sequence Selector */}
          <div className="selector">
            <label htmlFor="sequence">Sequence:</label>
            <select
              id="sequence"
              value={selectedSequence}
              onChange={(e) => setSelectedSequence(e.target.value)}
            >
              {sequences.map((seq, index) => (
                <option key={index} value={seq}>
                  {seq}
                </option>
              ))}
            </select>
          </div>

          {/* Frame Selector */}
          <div className="selector">
            <label htmlFor="frame">Frame:</label>
            <select
              id="frame"
              value={selectedFrame}
              onChange={(e) => setSelectedFrame(Number(e.target.value))}
            >
              {frames.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Displaying the 'path' string */}
        <div className="path-display">
          {/* <p><strong>Path:</strong> {path}</p> */}
        </div>

        {/* Display the selected image */}
        <div className="image-display">
          {path && (
            <img
              src={path} // Complete path including the prefix
              alt="Selected"
              onClick={() => openModal(path)}
              onError={(e) => { e.target.src = '/images/default.png'; }} // Default image in case of error
            />
          )}
        </div>
      </header>

      {/* Modal to display the image in larger size */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal} aria-modal="true" role="dialog">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal} aria-label="Close Modal">&times;</button>
            <img src={modalImageSrc} alt="Zoomed" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
