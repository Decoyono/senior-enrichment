import React, { Component } from 'react';
import { connect } from 'react-redux'

import store from '../store'
import { editCampus } from '../redux/campuses'

class EditCampusLocal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageURL: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log("where u at", props)
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        store.dispatch(editCampus(this.state, this.props.routeParams.campusId))
    }


    render() {
        // const selectedCampus = state.selectedCampus;
        
        return (
            <div><h1>hii</h1></div>
/*        
        <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="campusName">Campus Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder={selectedCampus.name}
                    onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="campusImageURL">Campus ImageURL</label>
                    <input
                    type="text"
                    className="form-control"
                    id="imageURL"
                    placeholder={selectedCampus.imageURL}
                    onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                </form>)*/
        )
    }
    }

    const mapStateToProps = (state) => {

    return {
        selectedCampus: state.campuses.selectedCampus
    }
    }

    const EditCampus = connect(
    mapStateToProps)(EditCampusLocal);

export default EditCampus;