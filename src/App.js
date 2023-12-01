import React, { useState } from 'react';
import { analyzeImage } from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleAnalyzeClick = async () => {
    try {
      const result = await analyzeImage(imageUrl);
      console.log(result);
    } catch (error) {
      console.error('Error analyzing image:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-between' }}>
      <h1>Computer Vision</h1>
      <label>Insert URL or type prompt</label>
      <input 
        type="text" 
        placeholder='Enter URL to analyze or textual prompt to generate an image' 
        style={{ width: '100' }} 
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
      />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
        <button type='button' onClick={handleAnalyzeClick}>Analyze</button>
        <button type='button'>Generate</button>
      </div>
    </div>
  );
}

export default App;