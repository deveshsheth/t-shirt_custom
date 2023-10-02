import React, { Component } from 'react';
import './App.css';
// import Price from './components/price';
import Custom from './components/custom';
import Shirt from './components/shirt';
// import SVGComponent from './components/SVGComponent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      type: 'tshirt',
      material: 'light-cotton',
      color: 'white',
    }
  }

  changeColor = (e) => {
    this.setState({ color: e.target.value, design: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Custom state={this.state}
              changeColor={this.changeColor}
            />
          </div>

          <div className="col-md-4" style={{ align: "center" }}>
            <Shirt
              text={this.state.text}
              changeText={this.changeText}
              color={this.state.color}
              textColor={this.state.textColor}
              design={this.state.design} />
          </div>

          {/* <div className="col-md-4">
            <SVGComponent /> 
          </div> */}
          
        </div>
      </div>
    );
  }
}

export default App;
