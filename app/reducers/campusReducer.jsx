const campusInitialState = {
    campuses: []
}

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES'
const CREATE = 'CREATE_CAMPUS';
const EDIT = 'EDIT_CAMPUS';
const DELETE = 'DELETE_CAMPUS';

//REDUCERS

export default function reducer (state = campusInitialState, action) {
    switch (action.type) {

    case INITIALIZE:
        return Object.assign({}, state, {
            campuses: action.campuses
        });
       
    // case ADD:
    //     return [action.user, ...users];

    // case EDIT:
    //     return users.filter(user => user.id !== action.id);

    // case DELETE:
    //     return users.map(user => (
    //     action.user.id === user.id ? action.user : user
    //     ));

    default:
        return state;
    }
}