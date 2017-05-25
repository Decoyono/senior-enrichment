import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES'
const CREATE = 'CREATE_CAMPUS';
const EDIT = 'EDIT_CAMPUS';
const DELETE = 'DELETE_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

const init = campuses => ({type: INITIALIZE, campuses})
const create  = campus => ({ type: CREATE, campus });
const edit = campus  => ({ type: EDIT, user });
// const delete = id    => ({ type: DELETE, id });


//import remove user?


/* ------------       REDUCER     ------------------ */

export default function reducer (users = [], action) {
    switch (action.type) {

    case INITIALIZE:
        return action.campuses;

    case ADD:
        return [action.user, ...users];

    case EDIT:
        return users.filter(user => user.id !== action.id);

    case DELETE:
        return users.map(user => (
        action.user.id === user.id ? action.user : user
        ));

    default:
        return users;
    }
}


/* ------------       DISPATCHERS     ------------------ */

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(init(res.data)));
};


// export const removeUser = id => dispatch => {
//     dispatch(remove(id));
//     axios.delete(`/api/users/${id}`)
//         .catch(err => console.error(`Removing user: ${id} unsuccesful`, err));
// };

export const addCampus = campus => dispatch => {
    axios.post('/api/campus', campus)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(`Creating user: ${user} unsuccesful`, err));
};

// export const updateUser = (id, user) => dispatch => {
//     axios.put(`/api/users/${id}`, user)
//         .then(res => dispatch(update(res.data)))
//         .catch(err => console.error(`Updating user: ${user} unsuccesful`, err));
// };