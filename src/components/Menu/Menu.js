import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aberto: false
        }
    }
    abreOuFechaMenu = () => {

        if (this.state.aberto) {

            this.setState({ aberto: false });

        } else {

            this.setState({ aberto: true });

        }

    }
    render() {

        let classesDoBotao = 'navbar-menu__botao';
        let classesDasOpcoes = 'navbar-menu__opcoes';
        if (this.state.aberto) {
            classesDoBotao += ' navbar-menu__botao--aberto';
            classesDasOpcoes += ' navbar-menu__opcoes--aberto';
        }

        return (
            <nav className="navbar-menu">
                <button onClick={this.abreOuFechaMenu} className={classesDoBotao}>
                    Menu
                </button>
                <ul className={classesDasOpcoes}>
                    <li>
                        <NavLink onClick={this.abreOuFechaMenu} to="/quem-somos" activeClassName="navbar-menu__opcoes--ativo">
                            Quem Somos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={this.abreOuFechaMenu} to="/como-funciona" activeClassName="navbar-menu__opcoes--ativo">
                            Como Funciona
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={this.abreOuFechaMenu} to="/admirar" className="navbar-admirar__link" activeClassName="navbar-menu__opcoes--ativo">
                            Admirar Agora!
                        </NavLink>
                    </li>
                </ul>
        
                    <NavLink to="/admirar" className="navbar-admirar__botao" >
                            Admirar Agora!
                    </NavLink>

            </nav>
        )
    }
}

export default Menu;