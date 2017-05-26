import React from 'react'
import { Link } from 'react-router'

export default function Campuses(props) {

    const campuses = props.campuses;
    const removeCampus = props.removeCampus
    const setCampus = props.setCampus

    return (
    <div>
        <h2>Campuses</h2>
        <Link to='/new-campus'>
        <button>
            <span className="glyphicon glyphicon-plus">Add Campus</span>
        </button>
        </Link>
        <ul>
        {
        campuses.map(campus => (
            <div key={campus.id} className="col-md-4" id='oneCampusDiv'>
            <Link to={`/campuses/${campus.id}`} onClick={()=> setCampus(campus)}>
                <span><h3>{campus.name}</h3>
                    <img id="campusPic" className="center-block" src={campus.imageURL} /> 
                </span>
            </Link>
            <div>
            <button className="btn btn-outline-danger"
                onClick={(event) => {
                    event.preventDefault()
                    removeCampus(campus)}
                }>
                <span id="campusBtn" className="glyphicon glyphicon-remove">REMOVE</span>
            </button> 
        <Link to={`/edit-campus/${campus.id}`}>
            <button 
                className="btn btn-link btn-sm"
                data={campus.id}
                onClick={() => setCampus(campus)}>
                <span id="campusBtn" className="glyphicon glyphicon-pencil">EDIT</span>
            </button>
        </Link>
            </div>     
            </div>
            
            )
        )
        }
        </ul>
    </div>
    );
}

