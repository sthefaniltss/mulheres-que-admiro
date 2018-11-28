import React, { Component } from 'react';
import './Campo.css';

class Campo extends Component {
    
    constructor (props){
        super(props);
        
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
                    />
                    
                </div>
                
                
                )
    }
    
    
}

export default Campo;