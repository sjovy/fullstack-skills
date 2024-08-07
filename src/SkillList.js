import React from 'react';

const SkillList = ({ skills, removeSkill }) => {
  return (
    <ul className="list-group">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center border-0"
        >
          {skill}
          <button className="btn btn-danger btn-sm" onClick={() => removeSkill(index)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
