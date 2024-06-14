import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NewProjectInterface from './NewProjectInterface';
import { ProfileForm } from './ProfileForm';

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewProjectInterface projects={projects} />} />
        <Route path="/new-project" element={<ProfileForm addProject={addProject} />} />
        <Route path="/project/:username" element={<ProjectDetails projects={projects} />} />
      </Routes>
    </Router>
  );
}

function ProjectDetails({ projects }) {
  const { username } = useParams();
  const project = projects.find((p) => p.username === username);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.username}</h1>
      <p>{project.description}</p>
      <p>Roles: {project.roles.join(', ')}</p>
    </div>
  );
}

export default App;
