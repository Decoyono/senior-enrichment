
import React, { Component } from 'react';
import { connect } from 'react-redux'

import Students from '../components/Students'
import { selectStudent, removeStudent } from '../redux/students'
import { getOneCampus } from '../redux/campuses'

const mapStateToProps = (state) => {
    return {
    students: state.students.students,
    selectedStudent: state.students.selectedStudent,
    campuses: state.campuses.campuses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStudent(student) {
        dispatch(selectStudent(student))
        },
        setCampus(campusId) {
        dispatch(getOneCampus(campusId))
        },
        removeStudent(studentId) {
        dispatch(removeStudent(studentId))
        } 
    }
}

const StudentsContainer = connect(
    mapStateToProps, mapDispatchToProps
    )(Students);

export default StudentsContainer





