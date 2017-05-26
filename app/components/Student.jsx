import React, {Component} from 'react'
import Students from './Students'

const Student = (props) => {
    const students = props.selectedStudent
    const setStudent = props.setStudent
    const addStudent = props.addStudent
    const removeStudent = props.removeStudent
    const campuses = props.campuses
    

    return (
    <div>
        <Students 
        student={students} 
        campuses={campuses} 
        setStudent={setStudent}
        addStudent={addStudent}
        removeStudent={removeStudent} />
    </div>
    )
}

export default Student;
