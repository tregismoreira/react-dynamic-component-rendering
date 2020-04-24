import React from 'react';
import { Paragraph } from './components';
import './App.css';

// Import data.
import paragraphs from './assets/data.json';

function App() {
  return (
    <div className="app">
      <div className="container">
        {paragraphs.map((paragraph) => (
          <Paragraph type={paragraph.type} {...paragraph.attributes} />
        ))}
      </div>
    </div>
  );
}

export default App;
