import React, {Component} from 'react'
import Students from './Students'

const Student = (props) => {
    const students = props.selectedStudent
    const setStudent = props.setStudent
    const addStudent = props.addStudent
    const removeStudent = props.removeStudent
    const campuses = props.campuses
    console.log("wtf", props)
    

    return (
    <div>
       <h1> {students.name} </h1>
       <h2> {students.email} </h2>
       <h3> {students.campusId} </h3>
    </div>
    )
}

export default Student;
