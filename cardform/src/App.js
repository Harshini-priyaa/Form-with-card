// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewProjectInterface from './NewProjectInterface';
import { ProfileForm } from './Form';
import './NewProjectInterface.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NewProjectInterface />} />
          <Route path="/new-project" element={<ProfileForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
