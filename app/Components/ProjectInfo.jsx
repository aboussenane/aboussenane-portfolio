"use client"
import React from 'react';
import '../styles/Projects.css';

function ProjectInfo({ title, description, techStack, size}) {
    const style = {
        if (size === "large") {
            height: "500px"
        }
      };
  return (
    <>
      <div className="project-info-container" >
        <h1 className="project-title">{title}</h1>
      </div>
    </>
  );
}

export default ProjectInfo;