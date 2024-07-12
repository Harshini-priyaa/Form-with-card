import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NewProjectInterface.css';

const NewProjectInterface = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem('projects');
    return storedProjects ? JSON.parse(storedProjects) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const handleNewProjectClick = () => {
    navigate('/new-project');
  };

  const addProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
    toast.success('Project added successfully!', {
      onClose: () => {
        navigate('/');
      },
    });
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            {projects.length === 0 ? (
              <div className="no-projects">
                <h4>No projects</h4>
                <p>Get started by creating a new project.</p>
                <button className="new-project-button-main" onClick={handleNewProjectClick}>
                  + New Project
                </button>
              </div>
            ) : (
              <>
                <div className="project-grid">
                  {currentProjects.map((project) => (
                    <div key={project.username} className="project-card">
                      <div className="project-header">
                        <h2 className="project-title">{project.username}</h2>
                        <div className="menu-container">
                          <button className="menu-button">⋮</button>
                          <div className="dropdown-menu">
                            <button onClick={() => alert(`Viewing details for ${project.username}`)}>View</button>
                            <button onClick={() => navigate('/new-project', { state: { project } })}>Edit</button>
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
                  ))}
                </div>
                <div className="pagination">
                  {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }, (_, i) => (
                    <button key={i + 1} onClick={() => paginate(i + 1)} className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}>
                      {i + 1}
                    </button>
                  ))}
                </div>
              </>
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
