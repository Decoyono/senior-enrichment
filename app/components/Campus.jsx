import React, { Component } from 'react'
import Students from './Students'


const Campus = (props) => {

    const selectedCampus = props.selectedCampus;
    const student = props.students
    const campus = props.campuses
    const removeStudent = props.removeStudent
    const setStudent = props.setStudent

    return (
    <div>
        <h1>{selectedCampus.name}</h1>
        <Students 
        setStudent = {props.setStudent}
        removeStudent = {props.removeStudent}
        students={props.students} 
        campuses={props.campuses} 
        selectedStudent={props.selectedCampus} />
    </div>
    )
}

export default Campus;