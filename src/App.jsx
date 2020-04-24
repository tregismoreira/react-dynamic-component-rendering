import React from 'react';
import { Heading } from './components/Paragraphs';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Heading level="h2" text="New heading element" />
      </div>
    </div>
  );
}

export default App;
