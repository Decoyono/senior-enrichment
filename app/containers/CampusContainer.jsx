
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Campus from '../components/Campus'
import { selectStudent, removeStudent } from '../redux/students'

const mapStateToProps = (state) => {


    return {
        students: state.students.students,
        selectedCampus: state.campuses.selectedCampus,
        campuses: state.campuses.campuses,
        selectedStudent: state.students.selectedStudents
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStudent(student) {
        dispatch(selectStudent(student))
        },
        removeStudent(studentId) {
        dispatch(removeStudent(studentId))
        }
    }
}




const CampusContainer = connect(
    mapStateToProps, mapDispatchToProps
    )(Campus);

export default CampusContainer


