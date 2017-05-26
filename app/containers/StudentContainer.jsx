import React from 'react';
import { connect } from 'react-redux'

import Student from '../components/Student'
import { selectStudent, removeStudent } from '../redux/students'
import { getOneCampus } from '../redux/campuses'

const mapStateToProps = (state) => {

    return {
        selectedStudent: state.students.selectedStudent,
        campuses: state.campuses.campuses,
        students: state.students.students,
        selectedCampus: state.campuses.selectedCampus
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setStudent(student) {
        dispatch(selectStudent(student))
        },
        setCampus(campusId) {
        dispatch(getCampusById(campusId))
        },
        removeStudent(studentId) {
        dispatch(removeStudent(studentId))
        }
    }
    }


const StudentContainer = connect(
    mapStateToProps, mapDispatchToProps
    )(Student);

export default StudentContainer;







/*import React, {Component} from 'react'
// import store from '../store';

export default class StudentContainer extends Component {

    constructor (props) {
    super(props);
    }

    render() {
        return (
            <div>
                <h1>One Student</h1>
            </div>
        )
    }
}*/

