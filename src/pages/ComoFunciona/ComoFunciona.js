import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import icone from '../../venus.svg';
import './ComoFunciona.css';

class ComoFunciona extends Component {
  render() {
    return (
      <div >
        <Navbar/>
        <main className="como-funciona">
                <article className="como-funciona__titulo">
                    <h1>
                        Como Funciona 
                    </h1>
                </article>
                <section className="como-funciona__instrucoes">
                   
                </section>  
            </main>
      </div>
    );
  }
}

export default ComoFunciona;