import React, { Component } from 'react';

class Shirt extends Component {
  render() {
    const { design } = this.props;
    let backgroundImageUrl;

    switch (design) {
      case 'd1':
        backgroundImageUrl = 'd1.jpg';
        break;
      case 'd2':
        backgroundImageUrl = 'd2.jpg';
        break;
      case 'd3':
        backgroundImageUrl = 'd3.jpg';
        break;
      case 'd4':
        backgroundImageUrl = 'd4.jpg';
        break;
        case 'd5':
        backgroundImageUrl = 'd5.jpg';
        break;
      default:
        backgroundImageUrl = 'default.jpg'; 
    }

    return (
      <div className="shirt">
        <img
          style={{ backgroundImage: `url('${backgroundImageUrl} ')`, width: 900, height: 800 }}
          src="shirt2.png"
          alt="shirt"
        />
      </div>
    );
  }
}

export default Shirt;
