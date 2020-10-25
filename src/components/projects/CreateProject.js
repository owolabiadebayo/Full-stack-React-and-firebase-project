import React, { Component } from 'react'
import { ProjectActions } from '../../store/action/ProjectAction'
import { connect } from 'react-redux'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.ProjectActions(this.state) // take in the state
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  
  return{
    ProjectActions: (project) => dispatch(ProjectActions(project))  //map the object of the state to dispatch 
  }
}

export default connect(null,mapDispatchToProps)(CreateProject)
