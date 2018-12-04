import React, { Component } from 'react';
import './Layout.css';
import arabesco from './arabesco.svg';
import venus from './venus-pink.svg';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="layout">
                <div className="layout__linha-rosa">
                    <div className="layout__linha-azul">
                        <div>
                            <img src={arabesco} className="layout__arabesco" />
                        </div>
                        <div className="layout__titulo">
                            <p>
                                Certificado de Maravilhosa
                            </p>
                        </div>
                        <div className="layout__info">
                            <h1>
                                Obrigada
                            </h1>
                            <div className="layout__info-textos">
                                <p>
                                    <span className="sublinhado">Caroline Pandolfe</span>
                                    <span>, é com muito carinho que te homenageio por
                                        <span>me aguentar todos os dias, pelas conversas e por nos empoderarmos todos os dias juntas!
                                        </span>
                                    </span>
                                </p>
                                <p>Um abraço especial de                 <span className="sublinhado"> Sthefani Laura</span>.
                                </p>
                                <p>
                                    <span>04/12/2018</span>
                                    <p>
                                        <span className="sublinhado">Sthefani Laura</span>
                                        <span className="sublinhado">Mulheres que admiro <img src={venus} className="layout__logo" /></span>
                                    </p>

                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}




export default Layout;