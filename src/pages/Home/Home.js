import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import logo from '../../logo.svg';
import icone from '../../venus.svg';
import './Home.css';

class Home extends Component {
    render() {
      return (
        <div >
            <Navbar/>
            <main className="home">
                <article className="home__titulo">
                    <h1>
                        Seja Bem-Vinda à, 
                    </h1>
                    <span>
                        <img className="home__logo" src={logo} alt="Logo"/>
                    </span>
                </article>
                <section className="home__introducao">
                    <p>
                        Já pensou em homenagear aquela mulher que você conhece e você precisa dizer o quanto ela é maravilhosa?
                    </p>
                    <p>
                        É muito simples presentear assim, e você pode deixar alguém feliz!
                    </p>
                    <NavLink to="/quem-somos" className="home__botao">
                        Saiba Mais <img className="home__logo-icone" src={icone} alt="Icone do Logo"/>
                    </NavLink>
                    
                </section>  
            </main>
        </div>
      );
    }
  }
  
  export default Home;
  