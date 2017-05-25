import React from 'react'
import { Link } from 'react-router'



export default function Campuses(props) {
    console.log("THESE ARE THE PROPS", props)
    const campuses = props.campuses;
    const removeCampus = props.removeCampus
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
        campuses.map(campus => (
            <div key={campus.id} className="col-md-4" id='oneCampusDiv'>
                <h1>{campus.name}</h1> 
                <img src={campus.imageURL} /> 
            <div>
            <button className="btn btn-link"
                onClick={(event) => {
                    event.preventDefault()
                    removeCampus(campus)}
                }>
                <span id="campusBtn" className="glyphicon glyphicon-remove">REMOVE</span>
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

/*export default function Campuses(props) {
    return (
        <div>
            <h2>Campuses</h2>
            <button>
            Add Campus
            </button>

            <ul>
                Campuses eventually
                <button>
                    delete campus
                </button>
            </ul>
        </div>
    )
}*/