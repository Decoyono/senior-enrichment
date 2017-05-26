import React, { Component } from 'react'


const Campus = (props) => {
    const selectedCampus = props.selectedCampus;

    return (
    <div>
        <h1>{selectedCampus.name}</h1>
        <Student student={props.students} campus={props.campuses} selectedStudent={props.selectedStudent} />
    </div>
    )
}

export default Campus;