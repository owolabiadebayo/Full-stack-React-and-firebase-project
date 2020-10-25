import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({Projects}) => {
  console.log(Projects);
  return ( <div className="project-list section">

  {Projects && Projects.map((project) => 
    <ProjectSummary key={project.id} project = {project}/> )}
  </div> );
 
}
 
export default ProjectList;