import React, { useState } from "react";
import "react-vertical-timeline-component/style.min.css";
import experiences from '../data/experience-data.js';
import '../styles/Experience.css';
import { ReactComponent as EduIcon } from '../assets/graduate.svg';
import { ReactComponent as WorkIcon } from '../assets/work.svg';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function ExperienceItem({ experience }) {
  const [showImg, setShowImg] = useState(false);

  const handleImg = () => {
    setShowImg(!showImg);
  }

  let workIconStyles = { background: "#be743c" };
  let eduIconStyles = { background: "#f9c74f" };

  return (
    <VerticalTimelineElement
      key={experience.id}
      date={experience.date}
      dateClassName="date"
      icon={experience.icon === "WorkIcon" ? <WorkIcon /> : <EduIcon />}
      iconStyle={experience.icon === "WorkIcon" ? workIconStyles : eduIconStyles}
    >
      <h3 className="vertical-timeline-element-title">
        {experience.title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        {experience.company}
      </h4>
      <p style={{whiteSpace:'pre-line'}}>{experience.description}</p>
      
      {experience.image != null &&(
          <button onClick={handleImg} className="button">
          {showImg ? "Hide Image" : "View Image"}
        </button>
      )}
    
      
      {showImg && experience.image && (
        <div className="experience-image">
          <img src={experience.image} alt="Experience" className="experience-image" />
        </div>
      )}
    </VerticalTimelineElement>
  );
}

function Journey() {
  return (
    <div>
      <h1 className="experience-title">My Journey</h1>
      <VerticalTimeline animate={true}>
        {experiences.map((element) => (
          <ExperienceItem key={element.id} experience={element} />
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Journey;
