import React from 'react';
import { Link } from 'react-router'

export default function Students(props) {

  const students = props.students;
  const campuses = props.campuses;
  const setStudent = props.setStudent;
  const setCampus = props.setCampus;
  // const addStudent = props.addStudent;
  const removeStudent = props.removeStudent;

    return (<div>
              <h2>Students</h2>
              <button>
                <Link to={`/new-student`}>
                  <span>Add A Student</span>
                </Link>
              </button>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Campus</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {students && students.map(
                    student => <tr key={student.id}>
                      <td><Link to={`/students/${student.id}`} onClick={() => setStudent(student)}>{student.name}</Link></td>
                      <td>{student.email}</td>
                      {/*below onClick of link to campus, sets the campus to selectedCampus
                        also shows the campus for the specific students' campus at the row by mapping thru
                        maybe there is a cleaner solution?*/}
                      <td><Link to={`/campuses/${student.campusId}`}
                                onClick={() => setCampus(student.campusId)}>
                                {campuses.map(campus => ((campus.id === student.campusId) ? campus.name : null))}
                          </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-link btn-sm"
                          data={student.id}
                            onClick={(evt) => {
                            evt.preventDefault()
                            removeStudent(student.id)
                          }
                        }>
                          <span className="glyphicon glyphicon-remove" />
                        </button>
                        <button
                          className="btn btn-link btn-sm"
                          data={student.id}
                          onClick={() => setStudent(student)}>
                          <Link to={`/edit-student/${student.id}`}>
                          <span className="glyphicon glyphicon-pencil" />
                          </Link>
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
      </div>)
}