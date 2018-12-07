import React, { Component } from 'react';
import './Layout.css';
import arabesco from './arabesco.svg';
import venus from './venus-pink.svg';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeAdmirada: '',
            mensagem: '',
            nomeCompleto: '',
            data:'',
            nomeAssinatura: ''
        }
    }

    render() {
        return (
            <div alteraSetState={this.props.alteraSetState} id="layout__admirar" className="layout">
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
                                    <span className="sublinhado">{this.state.nomeAdmirada}</span>
                                    <span>, é com muito carinho que te homenageio por
                                        <span>{this.state.mensagem}
                                        </span>
                                    </span>
                                </p>
                                <p>Um abraço especial de                 <span className="sublinhado"> {this.state.nomeCompleto} </span>.
                                </p>
                                <p>
                                    <span>{this.state.data}</span>
                                    <p>
                                        <span className="sublinhado">{this.state.nomeAssinatura}</span>
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