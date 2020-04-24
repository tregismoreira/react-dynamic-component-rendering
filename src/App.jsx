import React from 'react';
import { Paragraph } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Paragraph
          type="heading"
          content="Cras mattis consectetur purus sit amet fermentum."
        />
        <Paragraph
          type="heading"
          level="h3"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}

export default App;
