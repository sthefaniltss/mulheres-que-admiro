import React, { Component } from 'react';
import './Layout.css';
import arabesco from './arabesco.svg';
import venus from './venus-pink.svg';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dados :[{
                nomeAdmirada: "Sthefani"},
                {mensagem: "uma mensagem aqui"},
                {nomeCompleto: "meu nome completo"},
                {data:"12/12/2019"},
                {nomeAssinatura: "meu nome de assinatura"
            }]
        }
    }
    onChildChanged() {
        this.setState({dados: this.props.alteraState});
    }

    render() {
        return (
            <div alteraState={this.props.alteraState} id="layout__admirar" className="layout">
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
                                    <span className="sublinhado">{this.state.dados[0].nomeAdmirada}</span>
                                    <span>, é com muito carinho que te homenageio por
                                        <span>{this.state.dados[1].mensagem}
                                        </span>
                                    </span>
                                </p>
                                <p>Um abraço especial de <span className="sublinhado"> {this.state.dados[2].nomeCompleto} </span>.
                                </p>
                                <p>
                                    <span>{this.state.dados[3].data}</span>
                                    <p>
                                        <span className="sublinhado">{this.state.dados[4].nomeAssinatura}</span>
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