import React from 'react'
import { Link } from 'react-router'


export default function Campuses(props) {
    console.log("THESE ARE THE PROPS", props)
    const campuses = props.campuses;
    return (
    <div>
        <h2>Campuses</h2>
        <ul>
        {
        campuses.map(campus => (
            <div className="col-md-4" id='oneCampusDiv'>
            <Link to={`/campuses/${campus.get('id')}`}>
                <span><h3>{campus.get('name')}</h3>
                <img id="campusPic" className="img-circle" src={campus.get('imageURL')} />
                </span>
            </Link>           
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