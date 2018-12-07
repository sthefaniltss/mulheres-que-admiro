import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Titulo from '../../components/Titulo/Titulo';
import Figure from '../../components/Figure/Figure';
import Legenda from '../../components/Legenda/Legenda';
import passo1 from '../../passo1.svg';
import passo2 from '../../passo2.png';
import passo3 from '../../passo3.png';
import passo4 from '../../passo4.png';
import './ComoFunciona.css';

class ComoFunciona extends Component {
  render() {
    return (
      <div >
        <Navbar/>
        <main className="como-funciona">
                <article className="como-funciona__titulo">
                    <h1>
                        É só seguir o passo a passo! 
                    </h1>
                </article>
                <section className="como-funciona__instrucoes">
                  <div>
                    <Titulo>Passo 1</Titulo>
                    <Figure src={passo1}/>
                    <Legenda>Clique no botão</Legenda>
                  </div>
                  <div>
                    <Titulo>Passo 2</Titulo>
                    <Figure src={passo2}/>
                    <Legenda>Escolha um layout</Legenda>
                  </div>
                  <div>
                    <Titulo>Passo 3</Titulo>
                    <Figure src={passo3}/>
                    <Legenda>Preencha as informações necessárias</Legenda>
                  </div>
                  <div>
                    <Titulo>Passo 4</Titulo>
                    <Figure src={passo4}/>
                    <Legenda>Envie para quem você quiser!</Legenda>
                  </div>
                   
                </section>  
            </main>
      </div>
    );
  }
}

export default ComoFunciona;