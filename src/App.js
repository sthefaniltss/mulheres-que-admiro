import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Switch>
             <Route path="/" exact component={Home}/>
         </Switch>
      </div>
    );
  }
}

export default App;
