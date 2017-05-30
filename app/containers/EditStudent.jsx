import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../store'
import { editStudent } from '../redux/students'

class EditStudentLocal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      campusId: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit(event){
    store.dispatch(editStudent(this.state, this.props.selectedStudent.id))
  }


  render() {
    const campuses = this.props.campuses;
    const selectedStudent = this.props.selectedStudent;
  
    return (
    <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="studentName">Student's Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder={selectedStudent.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentEmail">Student's Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder={selectedStudent.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className= "form-group">
                <label>Select Campus</label>
                <div>
                  <select id="campusId" onChange={this.handleChange}>
                    <option>    
                    </option>
                    {campuses && campuses.map((campus) => {
                      return (<option
                                key={campus.id}
                                value= {campus.id}>
                              {campus.name}
                            </option>)})}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>)
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students.students,
    campuses: state.campuses.campuses,
    selectedStudent: state.students.selectedStudent
  }
}

const EditStudent = connect(
  mapStateToProps)(EditStudentLocal);

export default EditStudent;