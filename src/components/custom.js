import React, { Component } from 'react';

class Custom extends Component {
  render() {
    return (
      <div className="custom well">
        <span>Custom color : </span>
        <select value={this.props.value} onChange={this.props.changeColor} >
          <option selected value="d1">Design 1</option>
          <option value="d2">Design 2</option>
           <option value="d3">Design 3 </option>
           <option value="d4">Design 4 </option>
           <option value="d5">Design 5 </option>
        </select>
      
      </div>
    );
  }
}

export default Custom; 
