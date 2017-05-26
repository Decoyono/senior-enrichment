import React, {Component} from 'react'
// import store from '../store';


const Home = ({ children }) => {
    return (
    <div> 
        <h2>Margaret Hamilton's Hogwarts Interplanetary Academy of JavaScript</h2>
        <img id="hogwarts" src="http://orig04.deviantart.net/2bab/f/2011/170/3/f/harry_potter_hogwarts_banner_by_uprisen257-d3jcvxa.png" />
    <div id="main" className="container-fluid">
        { children }
    </div>
    </div>
    )
};

export default Home;
