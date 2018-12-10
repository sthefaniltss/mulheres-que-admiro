import React, { Component } from 'react';
import ImagePicker from 'react-image-picker';
import ReactToPrint from "react-to-print";
import Navbar from '../../components/Navbar/Navbar';
import Label from '../../components/Label/Label';
import Campo from '../../components/Campo/Campo';
import Layout from '../../components/Layout/Layout';
import passo4 from '../../passo4.png';
import layout2 from './layout2.png';
import layout3 from './layout3.png';
import './Admirar.css';

class Admirar extends Component {
    constructor(props) {
        super(props);
        this.nomeAdmiradaRef = React.createRef();
        this.nomeRef = React.createRef();
        this.dataRef = React.createRef();
        this.assinaturaRef = React.createRef();
        // this.mensagem = React.createRef();
        this.state = { image: null, certificado: false, dados: null};
        this.valor = '';
    }
    onPick = image => {
        this.setState({ image });
    };
   
    
    pegaValor() {
        return this.valor;
    }
    pegaDados(){
        return this.dados;
    }

    validar = event => {
        const textarea = event.target;
        const {value} = textarea;
        this.valor = value;
        console.log(value)
    }
    // layoutEscolhido = (event) => {
    //     event.preventDefault();
        
    // }
    enviaDados = (event) => {
        if(this.state.image){

            event.preventDefault();
            const inputAdmirada = this.nomeAdmiradaRef.current;
            const inputNome =  this.nomeRef.current;
            const inputData =  this.dataRef.current;
            const inputAssinatura =  this.assinaturaRef.current;
            const textareaMensagem = this.valor;
            const dados = [{
                nomeAdmirada: inputAdmirada.pegaValor()},
                {mensagem: textareaMensagem},
                {nomeCompleto: inputNome.pegaValor()},
                {data:inputData.pegaValor()},
                {nomeAssinatura: inputAssinatura.pegaValor()
                }]
                this.setState({dados})
                this.setState({certificado: true});
                console.log(dados)
        }else{
            alert("Escolha um layout primeiro!");
        }
        
    }
    fechaLayout = () => {
        this.setState({certificado: false});
    }

    render() {
        const layouts = [
            { src: passo4, value: 0 },
            { src: layout2, value: 1 },
            { src: layout3, value: 2 }
          ];
        const certificado = this.state.certificado;
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
                    <form onSubmit={this.enviaDados} >
                    <h1>Agora preencha as informações:</h1>
                        <Label>Nome da Admirada:</Label>
                        <Campo ref={this.nomeAdmiradaRef} id="nome__admirada" type="text" name="nome__admirada" placeholder="Digite aqui o nome da admirada" />
                        <Label>Mensagem:</Label>
                        <textarea onChange={this.validar} className="admirar__mensagem" rows="3" placeholder="Digite aqui a sua homenagem"> </textarea>
                        <Label>Nome completo:</Label>
                        <Campo ref={this.nomeRef} id="nome" type="text" name="nome__seu" placeholder="Digite aqui o seu nome" />
                        <Label>Data:</Label>
                        <Campo ref={this.dataRef} id="data" type="date" name="data"/>
                        <Label>Nome na assinatura:</Label>
                        <Campo ref={this.assinaturaRef} id="nome__assinatura" type="text" name="nome__assinatura" placeholder="Digite aqui o nome na assinatura"/>
                        <div className="admirar__botao-display">
                            <button  className="admirar__botao">Admirar!</button>
                        </div>
                    </form>
                    {
                        certificado ? (
                        <div className="modal"> 
                            <Layout alteraState={this.state.dados} ref={el => (this.Layout = el)}/> 
                            <div>
                                <button onClick={this.fechaLayout} className="botao__modal--fechar">
                                    
                                </button>
                                <ReactToPrint trigger={() => <button className="botao__modal--download"></button>} 
                                    content={() => this.Layout}
                                />
                                
                            </div>
                            
                        </div>
                        ) : false
                    }
                </section>
            </main>
        </div>
    );
  }
}

export default Admirar;