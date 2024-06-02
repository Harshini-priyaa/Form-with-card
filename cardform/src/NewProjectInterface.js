// src/NewProjectInterface.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewProjectInterface.css';

const NewProjectInterface = () => {
  const navigate = useNavigate();

  const handleNewProjectClick = () => {
    navigate('/new-project');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1><b>Projects</b></h1>
        <hr />
      </header>
      <main className="app-main">
        <div className="toolbar">
          <button className="new-project-button" onClick={handleNewProjectClick}>New project</button>
          <input type="text" placeholder="Search for a project" className="search-input" />
        </div>
        <section className="project-list">
          <h2 className="project-title">Fuzionest</h2>
          <hr />
          <div className="no-projects">
            <h4>No projects</h4>
            <p>Get started by creating a new project.</p>
            <button className="new-project-button-main" onClick={handleNewProjectClick}>
              + New Project
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewProjectInterface;
