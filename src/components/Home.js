import React, { Component } from 'react';
import ticket from './../images/movie_tickets.jpg';
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>This is the home page</h2>
        <hr/>
        <img src={ticket} alt="movie ticker" />
        {/* <hr/>
        <div className='tickets'></div> */}
      </div>
    )
  }
}

export default Home