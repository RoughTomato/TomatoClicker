import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tomatoes: 0,
    };

    this.addTomato = this.addTomato.bind(this);
    setInterval(this.addTomato, 1000);
  }

  addTomato() {
    this.setState(state => ({
      tomatoes: state.tomatoes + 1,
    }));
  }

  render() {
    return (
      <div className="App">
        <Nav tomatoes={this.state.tomatoes} />
        <header className="App-header">
          <button type="button" className="tomato" onClick={this.addTomato} />
        </header>
      </div>
    );
  }
}
