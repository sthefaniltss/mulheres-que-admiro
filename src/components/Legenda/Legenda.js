import React, { Component } from 'react';
import './Legenda.css';

class Legenda extends Component {
  render() {
    return (
      <div>
         <figcaption className="legenda">
             {this.props.children}
         </figcaption>
      </div>
    );
  }
}

export default Legenda;
