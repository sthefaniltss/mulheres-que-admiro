import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import icone from '../../venus.svg';
import './Botao.css';

class Botao extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div>
           <NavLink to={this.props.to} className="botao">
                        {this.props.children}<img className="botao__logo-icone" src={icone} alt="Icone do Logo"/>
            </NavLink>
        </div>
      );
    }
  }
  
  export default Botao;
