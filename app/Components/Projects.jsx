"use client"
import React from 'react';
import '../styles/Projects.css';

function Projects({ url, imageUrl }) {
  

  return (
    <>
      <div className="project-container" >
        <a href={url} target="_blank" rel="noreferrer" className="project-title">
          <img src={imageUrl} alt="project image" className="project-image" />
        </a>
      </div>
    </>
  );
}

export default Projects;