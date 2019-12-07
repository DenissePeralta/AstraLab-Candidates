import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Problems extends Component {
  render(){
    return(
      <div className="problemsContainer">
        <img className="companyLogo" src={require('../images/astraLogo.png')} alt="Company logo"></img>
        <h1 className="titles"> 2. CODE PROBLEM</h1>
        <div className="excersise">
        <p className="codeProblemText">
        Given an array, find the integer that appears an odd number of times.
        There will always be only one integer that appears an odd number of times.
          </p>      
          <div className="editableBox" contentEditable='true'>
        <p> {`function findOdd(A) {`}<br></br>
        {`//happy coding!`}<br></br>
        {`return 0;`}<br></br>
        {`};`} </p>
      </div>
      </div>
      <div className="btnContainer">
        <Link to='/FinalScreen'>
        <button className="sendBtn">
          SEND AT THIS POINT
        </button>
        </Link>
        <Link to='/FinalScreen'>
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
