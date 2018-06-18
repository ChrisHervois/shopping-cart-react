import React, { Component } from 'react';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CartHeader/>
        </header>
        <CartItems />
        <footer>
          <CartFooter/>
        </footer>
        
      </div>
    );
  }
}

export default App;
