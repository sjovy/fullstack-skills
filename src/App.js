import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillForm from './SkillForm';
import SkillList from './SkillList';

function App() {
  const [skills, setSkills] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const addSkill = (skill) => {
    setSkills([...skills, skill]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    const sortedSkills = [...skills].sort((a, b) => {
      if (newOrder === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
    setSkills(sortedSkills);
  };

  return (
    <div className="container mt-5">
      <h1>Fullstack Developer Skills</h1>
      <button className="btn btn-primary mb-3" onClick={toggleSortOrder}>
        Sort ({sortOrder === 'asc' ? 'Descending' : 'Ascending'})
      </button>
      <SkillList skills={skills} removeSkill={removeSkill} />
      <SkillForm addSkill={addSkill} />
    </div>
  );
}

export default App;

