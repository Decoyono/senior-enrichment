import React, {Component} from 'react'
// import store from '../store';


const Home = ({ children }) => {
    return (
    <div> 
        <h1>Hogwarts</h1>
    <div id="main" className="container-fluid">
        { children }
    </div>
    </div>
    )
};

export default Home;
