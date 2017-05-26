import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../store'
import { editStudent } from '../redux/students'

class EditStudent extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      campusId: ''
    }
    this.handleChange = this.handleChange.bind(this)
    console.log("HEEHEE", props)
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  


  render() {
    const campuses = this.props.campuses;
    const selectedStudent = this.props.selectedStudent;
    return (<form onSubmit={this.props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="studentName">Student name</label>
                <input
                  name="studentName"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder={selectedStudent.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentEmail">Student email</label>
                <input
                  name="studentEmail"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder={selectedStudent.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className= "form-group">
                <label>Select A Campus</label>
                <div>
                  <select name="campusId" id="campusId" onChange={this.handleChange}>
                    {campuses && campuses.map((campus) => {
                      return (<option
                                key={campus.id}
                                value= {campus.id}>
                              {campus.name}
                            </option>)})}
                  </select>
                </div>
              </div>
              <button type="submit" name="id" value={selectedStudent.id} className="btn btn-success">Submit</button>
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

const mapDispatchToProps = (dispatch) => {
  
  return {
    handleSubmit(event){
        dispatch(editStudent(
          {name: event.target.studentName.value, 
          email: event.target.studentEmail.value, 
          campusId: event.target.campusId.value}, 
          event.target.id.value))
  }
  }
}


const EditStudentForm = connect(
  mapStateToProps, mapDispatchToProps)(EditStudent);

export default EditStudentForm;