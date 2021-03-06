import React from 'react'

const ProjectSummary = ({project}) => {
  console.log(project);
  return ( <div className="ProjectSummary">
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the cloud</p>
        <p className="grey-text">3rd september, 2018</p>
      </div>
    </div>
  </div> );
}
 
export default ProjectSummary;