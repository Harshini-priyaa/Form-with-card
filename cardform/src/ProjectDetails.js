import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NewProjectInterface.css';  // Reusing the CSS file

const ProjectDetails = ({ projects }) => {
  const { username } = useParams();
  const project = projects.find((proj) => proj.username === username);
  const navigate = useNavigate();

  if (!project) {
    return <div>Project not found</div>;
  }

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
          <h1><b>Project Details</b></h1>
          <hr />
        </header>
        <main className="app-main">
          <div className="toolbar">
            <button className="new-project-button" onClick={() => navigate('/')}>Back to Projects</button>
          </div>
          <h2 className="project-title">{project.username}</h2>
          <section className="project-list">
            <div className="project-card">
              <div className="project-header">
                <h2 className="project-title">{project.username}</h2>
                <div className="menu-container">
                  <button className="menu-button">⋮</button>
                  <div className="dropdown-menu">
                    <button onClick={() => navigate(`/new-project`, { state: { project } })}>Edit</button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="project-details">
                <h4>Description</h4>
                <p>{project.description}</p>
                <h4>Roles</h4>
                <p>{project.roles.join(', ')}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetails;
