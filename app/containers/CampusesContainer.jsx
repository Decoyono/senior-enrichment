import React, {Component} from 'react'
import { connect } from 'react-redux'
import Campuses from '../components/Campuses'


const mapStateToProps = (state) => {
    console.log("THIS IS THE STATE", state)

    return {
        campuses: state.campuses
    }
}

// const mapDispatchtoProps = (dispatch) => {
//     return {

//     }
// }

const CampusesContainer = connect(mapStateToProps)(Campuses);

export default CampusesContainer;

