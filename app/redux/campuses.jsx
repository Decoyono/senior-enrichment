import axios from 'axios';
import {browserHistory} from 'react-router'

const campusInitialState = ({
    campuses: [],
    selectedCampus: {}
})

/* -----------------    ACTIONS     ------------------ */

const FETCH = 'FETCH_CAMPUSES'
const ADD = 'ADD_CAMPUS';
const EDIT = 'EDIT_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';
const SELECT = 'SELECT_CAMPUS';


/* ---------------   ACTION CREATORS  -------------------- */

export const fetchCampuses = campuses => ({type: FETCH, campuses})
const add  = campus => ({ type: ADD, campus });
const edit = campus  => ({ type: EDIT, campus });
const remove = id    => ({ type: REMOVE, id });
export const selectCampus = campus => ({ type: SELECT, campus})


/* ----------------    REDUCERS    ------------------ */

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
    
    case SELECT:
        return Object.assign({}, state, {
            selectedCampus: action.campus
        });

    case EDIT:
        return Object.assign({}, state, {
            campuses: state.campuses.map(campus => (action.campus.id === campus.id ? action.campus : campus))
        });


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
        .then(() => console.log("did it"))

};

export const editCampus = (campus, id) => dispatch =>  {
        axios.put(`/api/campuses/${id}`, campus)
        .then(res =>  dispatch(edit(res.data)))
        .then(() => 
        browserHistory.push('/campuses'))
};
export const getOneCampus = campusId => dispatch => {
    axios.get(`/api/campuses/${campusId}`)
        .then(res => dispatch(selectCampus(res.data)))
};

