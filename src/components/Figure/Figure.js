import React, { Component } from 'react';
import './Figure.css';

class Figure extends Component {
  render() {
    return (
         <figure className="figure__">
             <img src={this.props.src} className="figure__imagem"/>
         </figure>
    );
  }
}

export default Figure;
