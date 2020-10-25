import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    const {Projects} = this.props
    console.log(Projects)
    console.log(Projects.id)
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList key={Projects.id} Projects = {Projects}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  console.log(state)
  return {
    
    Projects:state.project.projects
  }
}

export default compose(connect(mapStateToProps), firebaseConnect([{collection: 'projects'}]))(Dashboard)
