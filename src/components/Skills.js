import React, { useState } from 'react';
import skillData from '../data/skill-data.js';
import '../styles/Skill.css';

export default function Skills() {
  const [zoomIndex, setZoomIndex] = useState(-1);

  const toggleZoom = (index) => {
    if (index === zoomIndex) {
      setZoomIndex(-1); //reset
    } else {
      setZoomIndex(index); //zoom
    }
  };
  

  return (
    <section className="skills-section" id="mySkills">
      <h1 style={{fontSize: 24}}> My Skills</h1>
      {skillData.skills && (
        <div className="skills-container">
          {skillData.skills.map((item, index) => (
            <div
              key={index}
              className={`skill-card ${index === zoomIndex ? 'zoomed-in' : ''}`}
              onClick={() => toggleZoom(index)}
            >
              <div className="icon">{item.icon}</div>
              <div className="title">{item.title}</div>
              <div className="desc">{item.description}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
