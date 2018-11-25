import React,  { Component }  from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import logo from '../../logo.svg';
import './Navbar.css';

class Navbar extends Component{
    constructor (props) {
        super(props);
    }
     
    render (){
        return (
            <header className="navbar">
                <Link to="/">
                    <img className="navbar__logo" src={logo} alt="Logo"/>
                </Link>
                <Menu/>

            </header>
        )
    }
}




export default Navbar;