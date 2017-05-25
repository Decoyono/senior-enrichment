import axios from 'axios';
import {browserHistory} from 'react-router'

const campusInitialState = {
    campuses: [],
}


/* -----------------    ACTIONS     ------------------ */

const FETCH = 'FETCH_CAMPUSES'
const ADD = 'ADD_CAMPUS';
const EDIT = 'EDIT_CAMPUS';
const DELETE = 'DELETE_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

export const fetchCampuses = function(campuses) {
    return {
        type: "FETCH_CAMPUSES",
        campuses
    }
}

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

    // case REMOVE:
    //     return users.map(user => (
    //     action.user.id === user.id ? action.user : user
    //     ));

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
