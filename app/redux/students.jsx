import axios from 'axios';
import {browserHistory} from 'react-router'

const studentInitialState = ({
    students: [],
    selectedStudent: {}
})

/* -----------------    ACTIONS     ------------------ */

const FETCH = 'FETCH_STUDENTS'
const ADD = 'ADD_STUDENT';
const EDIT = 'EDIT_STUDENT';
const REMOVE = 'REMOVE_STUDENT';
const SELECT = 'SELECT_STUDENT';


/* ------------   ACTION CREATORS     ------------------ */

export const fetchStudents = students => ({type: FETCH, students})
const add  = student => ({ type: ADD, student });
const edit = student  => ({ type: EDIT, student });
const remove = id    => ({ type: REMOVE, id });
export const selectStudent = student => ({ type: SELECT, student})



//import remove user?


/* ------------       REDUCERS    ------------------ */

export default function reducer (state = studentInitialState, action) {
    switch (action.type) {

    case FETCH:
        return Object.assign({}, state, {
            students: action.students
        });
    
    case ADD:
        return Object.assign({}, state, {
            students: state.students.concat(action.student)
        });
    
    case SELECT:
        return Object.assign({}, state, {
            selectedStudent: action.student
        });

    case EDIT:
        return Object.assign({}, state, {
            selectedStudent: action.student
        });


    case REMOVE:
        return Object.assign({}, state, {
            students: state.students.filter(student => student.id !== action.id)
        });

    default:
        return state;
    }
}


/* ------------       DISPATCHERS     ------------------ */


export const addStudent = student => dispatch => {
    axios.post('/api/students', student)
        .then(res => dispatch(add(res.data)))
        browserHistory.push('/students')
};

export const removeStudent = student => dispatch => {
    dispatch(remove(student.id))
    axios.delete(`/api/students/${student.id}`)
        .then(() => console.log("fuck yeah"))

};

export const editStudent = function(student, id) {
    dispatch(edit(student))
    return function(dispatch) {
        return axios.put(`/api/students/${id}`, student)
        .then(res => {
        dispatch(edit(student))
        browserHistory.go('/students')
        })
    }
};

export const getOneStudent = studentId => dispatch => {
    axios.get(`/api/students/${studentId}`)
        .then(res => dispatch(selectStudent(res.data)))
};

