import React, {Component} from 'react'
// import store from '../store';


const Home = ({ children }) => {
    return (
    <div> 
        <h2>Margaret Hamilton's Hogwarts Interplanetary Academy of JavaScript</h2>
    <div id="main" className="container-fluid">
        { children }
    </div>
    </div>
    )
};

export default Home;
