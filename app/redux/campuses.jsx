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


/* ------------   ACTION CREATORS     ------------------ */

export const fetchCampuses = campuses => ({type: FETCH, campuses})
const add  = campus => ({ type: ADD, campus });
const edit = campus  => ({ type: EDIT, campus });
const remove = id    => ({ type: REMOVE, id });
export const selectCampus = campus => ({ type: SELECT, campus})



//import remove user?


/* ------------       REDUCERS    ------------------ */

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
        console.log("GGGG")
        return Object.assign({}, state, {
            selectedCampus: action.campus
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
        .then(() => console.log("fuck yeah"))

};

export const editCampus = (campus, id) => dispatch =>  {
        axios.put(`/api/campuses/${id}`, campus)
        .then(res =>  res.data )
        .then((campus) =>{
            dispatch(edit(campus))
            
        })
        .then(() => 
        browserHistory.push('/campuses')
        )
};
export const getOneCampus = campusId => dispatch => {
    axios.get(`/api/campuses/${campusId}`)
        .then(res => dispatch(select(res.data)))
};

