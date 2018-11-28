import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Label from '../../components/Label/Label';
import Campo from '../../components/Campo/Campo';
import ImagePicker from "react-image-picker";
import passo1 from '../../passo1.svg';
import "react-image-picker/dist/index.css";
import './Admirar.css';

class Admirar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { image: null};
    }
    onPick = image => {
        this.setState({ image });
    };
    

    render() {
        const layouts = [
            { src: passo1, value: 0 },
            { src: passo1, value: 1 },
            { src: passo1, value: 2 }
          ];
        return (
        <div className="admirar">
            <Navbar/>
            <main className="">
                <article className="admirar__titulo">
                    <h1>Escolha seu layout:</h1>
                        <ImagePicker images={layouts} onPick={this.onPick} />
                </article>
                <section className="admirar__secao">
                    <h1>Agora preencha as informações:</h1>
                    <form>
                        <Label>Nome da Admirada:</Label>
                        <Campo id="nome__admirada" type="text" name="nome__admirada" placeholder="Digite aqui o nome da admirada" />
                        <Label>Mensagem:</Label>
                        <textarea className="admirar__mensagem" rows="3" placeholder="Digite aqui a sua homenagem"> </textarea>
                        <Label>Nome completo:</Label>
                        <Campo id="nome" type="text" name="nome__admirada" placeholder="Digite aqui o seu nome" />
                        <Label>Data:</Label>
                        <Campo id="data" type="date" name="data"/>
                        <Label>Nome na assinatura:</Label>
                        <Campo id="nome__assinatura" type="text" name="nome__assinatura" placeholder="Digite aqui o nome na assinatura"/>
                    </form>
                </section>
            </main>
        </div>
    );
  }
}

export default Admirar;