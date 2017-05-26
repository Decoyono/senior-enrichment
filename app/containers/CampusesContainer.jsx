import React, {Component} from 'react'
import { connect } from 'react-redux'
import Campuses from '../components/Campuses'
import { removeCampus, selectCampus } from '../redux/campuses'


const mapStateToProps = (state) => {


    return {
        campuses: state.campuses.campuses
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        setCampus(campus) {
            dispatch(selectCampus(campus))
        },
        removeCampus(campus) {
            dispatch(removeCampus(campus))
        }
    }
}

const CampusesContainer = connect(mapStateToProps, mapDispatchtoProps)(Campuses);

export default CampusesContainer;

