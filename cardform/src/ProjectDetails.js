import React from 'react';
import { useParams } from 'react-router-dom';
import './NewProjectInterface.css';

const ProjectDetails = ({ projects }) => {
    const { projectName } = useParams();
    console.log("Project Name from URL:", projectName); // Debugging: Check URL parameter
    const project = projects.find(proj => proj.username === projectName);
  
    if (!project) {
      return <div>Project found</div>;
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
          <section className="project-list">
            <h2 className="project-title">{project.username}</h2>
            <hr />
            <div className="project-details">
              <h4>Description</h4>
              <p>{project.description}</p>
              <h4>Roles</h4>
              <p>{project.roles.join(', ')}</p>
            </div>
          </section>
        </main>
      </div>
    );
  };
  export default ProjectDetails;