// src/NewProjectInterface.js
import React from 'react';
import './NewProjectInterface.css';

const NewProjectInterface = () => {
  return (
    <div className="new-project-interface">
      <header className="interface-header">
        <button className="new-project">New project</button>
        <input type="text" placeholder="Search for a project" className="search-bar" />
      </header>
      <main className="interface-main">
        <h1>Fuzionest</h1>
        <div className="no-projects">
          <p>No projects</p>
          <p>Get started by creating a new project.</p>
          <button className="new-project-main">+ New Project</button>
        </div>
      </main>
    </div>
  );
};

export default NewProjectInterface;
