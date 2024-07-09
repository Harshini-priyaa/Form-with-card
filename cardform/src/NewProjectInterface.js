import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewProjectInterface.css';

const NewProjectInterface = ({ projects }) => {
  const navigate = useNavigate();

  const handleNewProjectClick = () => {
    navigate('/new-project');
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <div className="sidebar-section">
          <h3>Projects</h3>
          <ul>
            <li>All projects</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Organizations</h3>
          <ul>
            <li>Kishore Fuzionest</li>
            <li>subash018's Org</li>
            <li>tamilarasu@fuzionest.com's Org</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Account</h3>
          <ul>
            <li>Preferences</li>
            <li>Access Tokens</li>
            <li>Security</li>
            <li>Audit Logs</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Documentation</h3>
          <ul>
            <li>Guides</li>
            <li>API Reference</li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <button className="logout-button">Log out</button>
        </div>
      </aside>
      <div className="main-content">
        <header className="app-header">
          <h1><b>Projects</b></h1>
          <hr />
        </header>
        <main className="app-main">
          <div className="toolbar">
            <button className="new-project-button" onClick={handleNewProjectClick}>New project</button>
            <input type="text" placeholder="Search for a project" className="search-input" />
          </div>
          <h2 className="project-title">Fuzionest</h2>
          <section className="project-list">
            <hr className="dashed-line" />
            {projects.length === 0 ? (
              <div className="no-projects">
                <h4>No projects</h4>
                <p>Get started by creating a new project.</p>
                <button className="new-project-button-main" onClick={handleNewProjectClick}>
                  + New Project
                </button>
              </div>
            ) : (
              projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.username}</h3>
                  <p>{project.description}</p>
                  <p>Roles: {project.roles.join(', ')}</p>
                </div>
              ))
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default NewProjectInterface;
