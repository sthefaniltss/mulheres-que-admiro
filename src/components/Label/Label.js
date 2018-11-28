import React, { Component } from 'react';
import './Label.css';

class Label extends Component {
  render() {
    return (
      <div>
         <label className="label__campo">
             {this.props.children}
         </label>
      </div>
    );
  }
}

export default Label;
