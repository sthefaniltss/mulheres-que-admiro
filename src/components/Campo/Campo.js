import React, { Component } from 'react';
import './Campo.css';

class Campo extends Component {
    
    constructor (props){
        super(props);
        this.valor = '';
        
    }
    pegaValor() {
        return this.valor;
    }

    validar = (event) => {
        const input = event.target;
        const {value} = input;
        this.valor = value;
        console.log(value)
    }
    render(){

        
        return (
                <div>
                    <input 
                        className="campo" 
                        id={this.props.id} 
                        type={this.props.type} 
                        name={this.props.name} 
                        placeholder={this.props.placeholder}
                        onChange={this.validar}
                    />
                    
                </div>
                
                
                )
    }
    
    
}

export default Campo;