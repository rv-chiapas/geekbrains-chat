import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}