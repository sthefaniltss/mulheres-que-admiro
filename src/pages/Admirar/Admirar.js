import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Label from '../../components/Label/Label';
import Campo from '../../components/Campo/Campo';
import Layout from '../../components/Layout/Layout';
import ImagePicker from 'react-image-picker';
import passo1 from '../../passo1.svg';
import htmlToImage from 'html-to-image';
import './Admirar.css';

class Admirar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { image: null};
        this.valor = '';
        
    }
    onPick = image => {
        this.setState({ image });
    };
    // donwload = htmlToImage.toPng(document.getElementById('my-node'))
    // .then(function (dataUrl) {download(dataUrl, 'my-node.png');
    // });
    
    pegaValor() {
        return this.valor;
    }

    validar = (event) => {
        const textarea = event.target;
        const {value} = textarea;
        this.valor = value;
        console.log(value)
    }
    

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
                    <div className="admirar__titulo--imagens">
                        <ImagePicker images={layouts} onPick={this.onPick} />

                    </div>
                </article>
                <section className="admirar__secao">
                    <h1>Agora preencha as informações:</h1>
                    <form>
                        <Label>Nome da Admirada:</Label>
                        <Campo id="nome__admirada" type="text" name="nome__admirada" placeholder="Digite aqui o nome da admirada" />
                        <Label>Mensagem:</Label>
                        <textarea onChange={this.validar} className="admirar__mensagem" rows="3" placeholder="Digite aqui a sua homenagem"> </textarea>
                        <Label>Nome completo:</Label>
                        <Campo id="nome" type="text" name="nome__admirada" placeholder="Digite aqui o seu nome" />
                        <Label>Data:</Label>
                        <Campo id="data" type="date" name="data"/>
                        <Label>Nome na assinatura:</Label>
                        <Campo id="nome__assinatura" type="text" name="nome__assinatura" placeholder="Digite aqui o nome na assinatura"/>
                        <div className="admirar__botao-display">
                            <button  className="admirar__botao">Admirar!</button>
                        </div>
                    </form>
                    {/* <Layout/>  */}
                </section>
            </main>
        </div>
    );
  }
}

export default Admirar;