import React, { Component } from 'react';
import './Label.css';

class Label extends Component {
  render() {
    return (
      <div className="label__">
         <label className="label__titulo">
             {this.props.children}
         </label>
      </div>
    );
  }
}

export default Label;
