import React, {Component} from 'react'
import { connect } from 'react-redux'
import Campuses from '../components/Campuses'
import { removeCampus } from '../redux/campuses'


const mapStateToProps = (state) => {
    console.log("THIS IS THE STATE", state)

    return {
        campuses: state.campuses
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        removeCampus(campus) {
            dispatch(removeCampus(campus))
        }
    }
}

const CampusesContainer = connect(mapStateToProps, mapDispatchtoProps)(Campuses);

export default CampusesContainer;

