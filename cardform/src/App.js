import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewProjectInterface from './NewProjectInterface';
import ProfileForm from './ProfileForm';
import ProjectDetails from './ProjectDetails';

function App() {
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem('projects');
    return storedProjects ? JSON.parse(storedProjects) : [];
  });

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  const updateProject = (updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.username === updatedProject.username ? updatedProject : project
      )
    );
  };

  const deleteProject = (username) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.username !== username));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewProjectInterface projects={projects} addProject={addProject} />} />
        <Route path="/new-project" element={<ProfileForm addProject={addProject} />} />
        <Route path="/project/:username" element={<ProjectDetails projects={projects} updateProject={updateProject} deleteProject={deleteProject} />} />
      </Routes>
    </Router>
  );
}

export default App;
