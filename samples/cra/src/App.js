// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Environment Variables</h1>
        <p>API URL: {process.env.REACT_APP_API_URL}</p>
        <p>App URL: {process.env.REACT_APP_APP_URL}</p>
      </header>
    </div>
  );
}

export default App;
