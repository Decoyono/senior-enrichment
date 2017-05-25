import axios from 'axios';
import {browserHistory} from 'react-router'

const campusInitialState = {
    campuses: [],
}

/* -----------------    ACTIONS     ------------------ */

const FETCH = 'FETCH_CAMPUSES'
const ADD = 'ADD_CAMPUS';
const EDIT = 'EDIT_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

export const fetchCampuses = campuses => ({type: FETCH, campuses})
const add  = campus => ({ type: ADD, campus });
const edit = campus  => ({ type: EDIT, user });
const remove = id    => ({ type: REMOVE, id });


//import remove user?


/* ------------       REDUCER     ------------------ */

export default function reducer (state = campusInitialState, action) {
    switch (action.type) {

    case FETCH:
        return Object.assign({}, state, {
            campuses: action.campuses
        });
    
    case ADD:
        return Object.assign({}, state, {
            campuses: state.campuses.concat(action.campus)
        });
    

    // case ADD:
    //     return [action.user, ...users];

    // case EDIT:
    //     return users.filter(user => user.id !== action.id);

    case REMOVE:
        return Object.assign({}, state, {
            campuses: state.campuses.filter(campus => campus.id !== action.id)
        });

    default:
        return state;
    }
}


/* ------------       DISPATCHERS     ------------------ */


export const addCampus = campus => dispatch => {
    axios.post('/api/campuses', campus)
        .then(res => dispatch(add(res.data)))
        browserHistory.push('/campuses')
};

export const removeCampus = campus => dispatch => {
    dispatch(remove(campus.id))
    axios.delete(`/api/campuses/${campus.id}`)
        .then(() => console.log("fuck yeah"))

}
