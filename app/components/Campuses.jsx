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
        <button type="button" className="btn btn-primary">
            <span className="glyphicon glyphicon-plus">Add Campus</span>
        </button>
        </Link>
        <ul>
        {
        campuses.map(campus => (
            <div key={campus.id} className="col-md-4" id='oneCampusDiv'>
            <Link to={`/campuses/${campus.id}`} onClick={()=> setCampus(campus)}>
                <span><h3>{campus.name}</h3>
                    <img id="campuspic" className="center-block" src={campus.imageURL} /> 
                </span>
            </Link>
            <div>
            <button type="button" className="btn btn-danger"
                onClick={(event) => {
                    event.preventDefault()
                    removeCampus(campus)}
                }>
                <span className="glyphicon glyphicon-remove">Remove</span>
            </button> 
        <Link to={`/edit-campus/${campus.id}`}>
            <button 
                type="button" 
                className="btn btn-secondary"
                data={campus.id}
                onClick={() => setCampus(campus)}>
                <span className="glyphicon glyphicon-pencil">Edit</span>
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

