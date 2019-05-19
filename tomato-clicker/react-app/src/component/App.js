import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class App extends React.Component {
  constructor() {
  	super();
    this.state = {
      tomatos: 0
    };
    
    this.addTomato = this.addTomato.bind(this);
    setInterval(this.addTomato, 1000);
  }
  
  addTomato() {
    this.setState(state => ({
      tomatos: state.tomatos + 1
    }));
  }

  render() {
    return (
      <div className="App">
      <div>You have {this.state.tomatos} 🍅.</div>
        <header className="App-header">
          <button class="tomato" onClick={this.addTomato}></button>
        </header>
      </div>
    );
  }
}