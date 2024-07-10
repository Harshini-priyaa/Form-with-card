import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewProjectInterface from './NewProjectInterface';
import ProfileForm from './ProfileForm';
import ProjectDetails from './ProjectDetails';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Clear local storage data on initial load
    localStorage.removeItem('projects');
  }, []);

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

export default App;
