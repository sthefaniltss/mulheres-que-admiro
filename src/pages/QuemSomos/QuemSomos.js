import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Botao from '../../components/Botao/Botao';
import icone from '../../venus.svg';
import './QuemSomos.css';

class QuemSomos extends Component {
    render() {
        return (
            <div >
                <Navbar />
                <main className="quem-somos">
                    <article className="quem-somos__titulo">
                        <h1>
                            Uma iniciativa para alegrar alguém!
                        </h1>
                    </article>
                    <section className="quem-somos__introducao">
                        <p>
                           Kitty loves pigs i like fish and sit in box or munch, munch, chomp, chomp lick the other cats and give me some of your food give me some of your food give me some of your food meh, i don't want it, man running from cops stops to pet cats, goes to jail. Meow to be let out while happily ignoring when being called for cat mojo crash against wall
                        </p>
                        <Botao to="/como-funciona" >
                            Saiba Como
                        </Botao>

                    </section>
                </main>
            </div>
        );
    }
}

export default QuemSomos;
