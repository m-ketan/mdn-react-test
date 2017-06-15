import React, { Component } from 'react';
import Header from './Header'
import Dashboard from './Dashboard'
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <Header />
      <Dashboard />
    );
  }
}

export default App;
