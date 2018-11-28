import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
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
                 
                </section>
            </main>
        </div>
    );
  }
}

export default Admirar;