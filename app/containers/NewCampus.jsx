import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../store'
import { addCampus } from '../redux/campuses'

export default class NewCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
        name: '',
        imageURL: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        store.dispatch(addCampus(this.state))
    }


    render() {
        return (<form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="campusName">Campus' Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="name"
                    onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="campusImageURL">Campus' Image Link</label>
                    <input
                    type="text"
                    className="form-control"
                    id="imageURL"
                    placeholder="link to image"
                    onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                </form>)
    }
    }