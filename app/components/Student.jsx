import React, {Component} from 'react'
import Students from './Students'
import {Link} from 'react-router'

const Student = (props) => {
    const student = props.selectedStudent
    const setStudent = props.setStudent
    const addStudent = props.addStudent
    const removeStudent = props.removeStudent
    const campuses = props.campuses
    const setCampus = props.setCampus;
    

return (<div>
                <h3>Student</h3>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Campus</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td><Link to={`/campuses/${student.campusId}`}
                                    onClick={() => setCampus(student.campusId)}>
                                    {campuses.map(campus => ((campus.id === student.campusId) ? campus.name : null))}
                            </Link>
                        </td>
                        </tr>
                    </tbody>
                </table>
        </div>)

}





export default Student;