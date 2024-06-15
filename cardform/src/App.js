import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import NewProjectInterface from './NewProjectInterface';
import { ProfileForm } from './ProfileForm';
import ProjectDetails from './ProjectDetails';

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

export default App;
