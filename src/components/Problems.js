import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Problems.css';

class Problems extends Component {
  render(){
    return(
      <div className="problemsContainer">
        <img className="companyLogo" src={require('../images/astraLogo.png')} alt="Company logo"></img>
        <h1 className="titles">1. CODE PROBLEM</h1>
        <div className="excersise">
        <p className="codeProblemText">
        Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
          </p>      
          <div className="editableBox" contentEditable='true'>
        <p> {`function boolToWord( bool ){`}<br></br>
        { `//...`}<br></br>
        {`};`} </p><br></br>
        </div>
      </div>
      <div className="btnContainer">
        <Link to='/FinalScreen'>
        <button className="sendBtn">
          SEND AT THIS POINT
        </button>
        </Link>
        <Link to='/Problems2'>
        <button className="continueBtn">
          CONTINUE
        </button>
        </Link>
      </div>
      </div>
    )
  }
}

export default Problems
