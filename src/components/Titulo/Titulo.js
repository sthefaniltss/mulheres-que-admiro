import React, { Component } from 'react';
import './Titulo.css';

class Titulo extends Component {
  render() {
    return (
      <div>
         <label className="titulo">
             {this.props.children}
         </label>
      </div>
    );
  }
}

export default Titulo;
