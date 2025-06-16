// File: src/App.js
import React, { useState } from 'react';
import AnimatedLanding from './components/AnimatedLanding';
import APISection from './components/APISection';
import './App.css';

function App() {
  const [showAPI, setShowAPI] = useState(false);

  return (
    <div className="App">
      {!showAPI ? (
        <AnimatedLanding onContinue={() => setShowAPI(true)} />
      ) : (
        <APISection />
      )}
    </div>
  );
}
export default App;