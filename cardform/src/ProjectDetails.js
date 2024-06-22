import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'; // Import the CSS file for styling

const ProjectDetails = ({ projects }) => {
  const { username } = useParams();
  const project = projects.find((proj) => proj.username === username);

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
              <h2 className="project-title">{project.username}</h2>
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
