import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import icone from '../../venus.svg';
import './QuemSomos.css';

class QuemSomos extends Component {
  render() {
    return (
      <div >
        <Navbar/>
        <main className="quem-somos">
                <article className="quem-somos__titulo">
                    <h1>
                        A Iniciativa 
                    </h1>
                </article>
                <section className="quem-somos__introducao">
                    <p>
                        Scratch the furniture try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard or try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard, hate dog. Roll on the floor purring your whiskers off scratch me there, elevator butt annoy owner until he gives you food say meow repeatedly until belly rubs, feels good yet sniff other cat's butt and hang jaw half open thereafter. Kitty loves pigs i like fish and sit in box or munch, munch, chomp, chomp lick the other cats and give me some of your food give me some of your food give me some of your food meh, i don't want it, man running from cops stops to pet cats, goes to jail. Meow to be let out while happily ignoring when being called for cat mojo crash against wall
                    </p>
                    <NavLink to="/como-funciona" className="quem-somos__botao">
                        Saiba Como <img className="quem-somos__logo-icone" src={icone} alt="Icone do Logo"/>
                    </NavLink>
                    
                </section>  
            </main>
      </div>
    );
  }
}

export default QuemSomos;
