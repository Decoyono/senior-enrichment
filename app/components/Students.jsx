import React from 'react';
import { Link } from 'react-router'

export default function Students(props) {


    const students = props.students;
    const campuses = props.campuses;
    const setStudent = props.setStudent;
    const setCampus = props.setCampus;
    const removeStudent = props.removeStudent;



    return (<div>
                <h2>Students</h2>
                <Link to={`/new-student`}>   
                    <button type="button" className="btn btn-primary glyphicon glyphicon-plus">
                    <span>Add Student</span>
                </button>
                </Link>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Campus</th>
                        <th>Remove and Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students && students.map(
                        student => <tr key={student.id}>
                        <td><Link to={`/students/${student.id}`} onClick={() => setStudent(student)}>{student.name}</Link></td>
                        <td>{student.email}</td>
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
                                removeStudent(student)
                            }
                            }>
                            <span className="glyphicon glyphicon-remove" />
                            </button>
                            <Link to={`/edit-student/${student.id}`}>
                            <button
                            className="btn btn-link btn-sm"
                            data={student.id}
                            onClick={() => setStudent(student)}>
                            <span className="glyphicon glyphicon-pencil" />
                            </button>
                            </Link>
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
        </div>)
    }