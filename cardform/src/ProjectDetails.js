import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './NewProjectInterface.css';  // Reusing the CSS file

const ProjectDetails = ({ projects, setProjects }) => {
  const { username } = useParams();
  const project = projects.find((proj) => proj.username === username);
  const navigate = useNavigate();

  const handleDelete = (usernameToDelete) => {
    const updatedProjects = projects.filter((proj) => proj.username !== usernameToDelete);
    setProjects(updatedProjects);
    navigate('/'); // Navigate back to the project list after deletion
  };

  const handleNewProjectClick = () => {
    navigate('/new-project');
  };
  
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
            <button className="new-project-button" onClick={handleNewProjectClick}>New project</button>
            <input type="text" placeholder="Search for a project" className="search-input" />
          </div>
          <h2 className="project-title">{project.username}</h2>
          <section className="project-grid">
            {projects.map((proj) => (
              <div key={proj.username} className="project-card">
                <div className="project-header">
                  <h2 className="project-title">{proj.username}</h2>
                  <div className="menu-container">
                    <button className="menu-button">⋮</button>
                    <div className="dropdown-menu">
                      <button onClick={() => alert(`Viewing details for ${proj.username}`)}>View</button>
                      <button onClick={() => navigate('/new-project', { state: { project: proj } })}>Edit</button>
                      <button onClick={() => handleDelete(proj.username)}>Delete</button> {/* Use handleDelete function */}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="project-details">
                  <h4>Description</h4>
                  <p>{proj.description}</p>
                  <h4>Roles</h4>
                  <p>{proj.roles.join(', ')}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetails;
