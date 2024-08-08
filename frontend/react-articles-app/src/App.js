// src/App.js

import React from 'react';
import './App.css';
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Articles</h1>
        <ArticleList />
      </header>
    </div>
  );
}

export default App;
