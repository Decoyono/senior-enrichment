import React from 'react'
import { Link } from 'react-router'



export default function Campuses(props) {
    console.log("THESE ARE THE PROPS", props)
    const campuses = props.campuses;
    const removeCampus = props.removeCampus
    const setCampus = props.setCampus
    console.log("do i have campuses", campuses)
    return (
    <div>
        <h2>Campuses</h2>
        <button>
            <Link to='/new-campus'>
                <span className="glyphicon glyphicon-plus">Add Campus</span>
            </Link>
        </button>
        <ul>
        {
        campuses.length && campuses.map(campus => (
            <div key={campus.id} className="col-md-4" id='oneCampusDiv'>
            <Link to={`/campuses/${campus.id}`} onClick={()=> setCampus(campus)}>
                <span><h3>{campus.name}</h3>
                    <img id="campusPic" src={campus.imageURL} /> 
                </span>
            </Link>
            <div>
            <button className="btn btn-link"
                onClick={(event) => {
                    event.preventDefault()
                    removeCampus(campus)}
                }>
                <span id="campusBtn" className="glyphicon glyphicon-remove">REMOVE</span>
            </button> 
            <button 
                className="btn btn-link btn-sm"
                data={campus.id}
                onClick={() => setCampus(campus)}>
                <Link to={`/edit-campus/${campus.id}`}>
                <span id="campusBtn" className="glyphicon glyphicon-remove">EDIT</span>
                </Link>
            </button>
            </div>     
            </div>
            
            )
        )
        }
        </ul>
    </div>
    );
}

