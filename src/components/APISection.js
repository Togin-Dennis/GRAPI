import React, { useEffect, useState } from 'react';
import './APISection.css';

const apiLinks = [
  { name: 'Free Games', url: 'https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/refs/heads/main/FreeGame.json' },
  { name: 'Apps', url: 'https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/refs/heads/main/Apps.json' },
  { name: 'DLC', url: 'https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/refs/heads/main/dlc.json' },
  { name: 'Top Discounts', url: 'https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/refs/heads/main/TopDiscount.json' },
  { name: 'Prime Gaming', url: 'https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/refs/heads/main/PrimeGaming.json' },
  { name: 'News', url: 'https://raw.githubusercontent.com/Togin-Dennis/GameRadarApi/refs/heads/main/News.json' }
];

function APISection() {
  const [samples, setSamples] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    Promise.all(apiLinks.map(link =>
      fetch(link.url)
        .then(res => res.json())
        .then(data => ({
          name: link.name,
          sample: data.slice ? data.slice(0, 1) : data
        }))
        .catch(() => ({
          name: link.name,
          sample: 'Failed to load data'
        }))
    )).then(setSamples);
  }, []);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="api-terminal-container">
      <h1 className="terminal-heading">📡 Game Radar API Endpoints</h1>

      <div className="terminal-box">
        {apiLinks.map((api, index) => (
          <div key={index} className="terminal-url-block">
            <h3 className="url-heading">🔹 {api.name}</h3>
            <div className="terminal-line">
              <span className="command">PS C:\\Users\\You curl {api.url}</span>
              <button className="copy-btn" onClick={() => handleCopy(api.url, index)}>
                {copiedIndex === index ? '✅ Copied' : '📋'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">💻 Example Fetch (React)</h2>
      <pre className="code-block">
{`useEffect(() => {
  fetch("${apiLinks[0].url}")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);`}
      </pre>

      <h2 className="section-title">🌍 Other Languages</h2>

      <div className="lang-blocks">
        <div className="code-box">
          <h4>🔸 JavaScript (Vanilla)</h4>
          <pre>{`fetch("${apiLinks[0].url}")
  .then(res => res.json())
  .then(data => console.log(data));`}</pre>
        </div>

        <div className="code-box">
          <h4>🔸 Python</h4>
          <pre>{`import requests

url = "${apiLinks[0].url}"
response = requests.get(url)
print(response.json())`}</pre>
        </div>

        <div className="code-box">
          <h4>🔸 cURL</h4>
          <pre>{`curl ${apiLinks[0].url}`}</pre>
        </div>

        <div className="code-box">
          <h4>🔸 Node.js</h4>
          <pre>{`const https = require('https');

https.get("${apiLinks[0].url}", res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data)));
});`}</pre>
        </div>

        <div className="code-box">
          <h4>🔸 PHP</h4>
          <pre>{`<?php
$url = "${apiLinks[0].url}";
$data = file_get_contents($url);
print_r(json_decode($data));
?>`}</pre>
        </div>
      </div>

      <h2 className="section-title">📦 API Response Samples</h2>
      {samples.map((s, i) => (
        <div key={i} className="sample-block">
          <h4>{s.name}</h4>
          <pre>{JSON.stringify(s.sample, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}

export default APISection;