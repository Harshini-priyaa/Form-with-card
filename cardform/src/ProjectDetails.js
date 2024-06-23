import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css'; // Import the CSS file for styling

const ProjectDetails = ({ projects }) => {
  const { username } = useParams();
  const project = projects.find((proj) => proj.username === username);
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMenuClick = (username) => {
    setDropdownOpen(dropdownOpen === username ? null : username);
  };

  const handleViewClick = (project) => {
    // Handle view logic here, e.g., show a modal or navigate to a detailed view
    alert(`Viewing details for ${project.username}`);
  };

  const handleEditClick = (project) => {
    navigate('/new-project', { state: { project } });
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1><b>Projects</b></h1>
        <hr />
      </header>
      <main className="app-main">
        <div className="toolbar">
          <button className="new-project-button" onClick={() => window.location.href = '/new-project'}>New project</button>
          <input type="text" placeholder="Search for a project" className="search-input" />
        </div>
        <section className="project-grid">
          {projects.map((project) => (
            <div key={project.username} className="project-card">
              <div className="project-header">
                <h2 className="project-title">{project.username}</h2>
                <div className="menu-container">
                  <button onClick={() => handleMenuClick(project.username)} className="menu-button">
                    ⋮
                  </button>
                  {dropdownOpen === project.username && (
                    <div className="dropdown-menu">
                      <button onClick={() => handleViewClick(project)}>View</button>
                      <button onClick={() => handleEditClick(project)}>Edit</button>
                    </div>
                  )}
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
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProjectDetails;
