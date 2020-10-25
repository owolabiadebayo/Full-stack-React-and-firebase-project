import React from "react";
const initState = {
};

const ProjectReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('craeted project', action.project);
      return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.err);
        return state;
        default:
          return state;
  }
  return state;
};

export default ProjectReducer;
