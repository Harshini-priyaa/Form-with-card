import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewProjectInterface from './NewProjectInterface';
import { ProfileForm } from './Form';
import ProjectDetails from './ProjectDetails';
import './NewProjectInterface.css';

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    console.log("Adding Project:", project); // Debugging: Check added project data
    setProjects([...projects, project]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NewProjectInterface projects={projects} />} />
          <Route path="/new-project" element={<ProfileForm addProject={addProject} />} />
          <Route path="/project/:projectName" element={<ProjectDetails projects={projects} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
