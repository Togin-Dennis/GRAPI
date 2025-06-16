// File: AnimatedLanding.js
import React, { useEffect, useState } from 'react';
import './AnimatedLanding.css';

const lines = [
  '> Initializing API access...',
  '> Scanning endpoints...',
  '> Preparing static files...',
  '> FreeGame.json loaded.',
  '> DLC.json loaded.',
  '> Apps.json loaded.',
  '> PrimeGaming.json loaded.',
  '> TopDiscount.json loaded.',
  '> News.json loaded.',
  '> Loading UI interface...',
  '> Connection secure.',
  '> Ready.'
];

function AnimatedLanding({ onContinue }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState('');

 useEffect(() => {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + lines[lineIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 1); // ✅ FAST typing (was 30)
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, lines[lineIndex]]);
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
        setCurrentLine('');
      }, 60); // ✅ FAST transition to next line (was 200)
      return () => clearTimeout(timeout);
    }
  }
}, [charIndex, lineIndex]);


  return (
    <div className="terminal-powershell">
      <div className="terminal-output">
        {displayedLines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        {lineIndex < lines.length && (
          <div>{currentLine}<span className="terminal-cursor" /></div>
        )}
      </div>

      {lineIndex === lines.length && (
        <div className="terminal-prompt">
          🎮 Welcome to <strong>Game Radar API</strong>
          <button onClick={onContinue}>Get API</button>
        </div>
      )}
    </div>
  );
}

export default AnimatedLanding;
