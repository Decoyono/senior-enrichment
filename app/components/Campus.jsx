import React, { Component } from 'react'


const Campus = (props) => {
    const selectedCampus = props.selectedCampus;

    return (
    <div>
        <h1>{selectedCampus.name}</h1>
        <h2>other stuff</h2>
    </div>
    )
}

export default Campus;