import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Label from '../../components/Label/Label';
import Figure from '../../components/Figure/Figure';
import Legenda from '../../components/Legenda/Legenda';
import passo1 from '../../passo1.svg';
import passo2 from '../../passo2.svg';
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
                  <div>
                    <Label>Passo 1</Label>
                    <Figure src={passo1}/>
                    <Legenda>Clique no botão</Legenda>
                  </div>
                  <div>
                    <Label>Passo 2</Label>
                    <Figure src={passo2}/>
                    <Legenda>Escolha um layout</Legenda>
                  </div>
                  <div>
                    <Label>Passo 3</Label>
                    <Figure src={passo1}/>
                    <Legenda>Preencha as informações necessárias</Legenda>
                  </div>
                  <div>
                    <Label>Passo 4</Label>
                    <Figure src={passo1}/>
                    <Legenda>Envie para quem você quiser!</Legenda>
                  </div>
                   
                </section>  
            </main>
      </div>
    );
  }
}

export default ComoFunciona;