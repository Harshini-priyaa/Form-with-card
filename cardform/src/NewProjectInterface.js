import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileForm from './ProfileForm'; // Make sure ProfileForm is correctly imported
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NewProjectInterface.css';

const NewProjectInterface = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [projects, setProjects] = useState([]);

  const handleNewProjectClick = () => {
    navigate('/new-project');
  };

  const addProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
    toast.success('Project added successfully!', {
      onClose: () => {
        navigate('/'); // Ensure it navigates back to the main project interface
      },
    });
  };

  const handleEditClick = (project) => {
    navigate('/new-project', { state: { project } });
  };

  const handleMenuClick = (username) => {
    // Logic to handle menu click, e.g., toggle dropdown menu
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
              projects.map((project) => (
                <div key={project.username} className="project-card">
                  <div className="project-header">
                    <h2 className="project-title">{project.username}</h2>
                    <div className="menu-container">
                      <button onClick={() => handleMenuClick(project.username)} className="menu-button">
                        ⋮
                      </button>
                      <div className="dropdown-menu">
                        <button onClick={() => alert(`Viewing details for ${project.username}`)}>View</button>
                        <button onClick={() => handleEditClick(project)}>Edit</button>
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
              ))
            )}
          </section>
          <ToastContainer />
        </main>
      </div>
      {location.pathname === '/new-project' && (
        <ProfileForm addProject={addProject} />
      )}
    </div>
  );
};

export default NewProjectInterface;
