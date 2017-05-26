
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









/*

import React, {Component} from 'react'
// import store from '../store';

export default class StudentsContainer extends Component {

    constructor (props) {
    super(props);
    }

    render() {
        return (
            <div>
                <h1>All students</h1>
            </div>
        )
    }
}*/

