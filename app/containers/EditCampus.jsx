import React, { Component } from 'react';
import { connect } from 'react-redux'

// import store from '../store'
import { editCampus } from '../redux/campuses'

class EditCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            imageURL: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        store.dispatch(editCampus(this.state, this.props.routeParams.campusId))
    }


    render() {
        const selectedCampus = this.props.selectedCampus;
        // auto populate name/imageURL of campus selected for edit
        return (<form onSubmit={this.handleSubmit}>
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
                </form>)
    }
    }

    const mapStateToProps = (state) => {

    //to access prop in current state - state.campusData.campuses
    return {
        selectedCampus: state.selectedCampus
    }
    }

    const EditCampusForm = connect(
    mapStateToProps)(EditCampus);

export default EditCampusForm;