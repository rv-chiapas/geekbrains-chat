import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChatLayout from './ChatLayout';
import Profile from './Profile';

export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <BrowserRouter>
       <Routes> 
        <Route exact path="/" render={() => (<Link to="/chat/0/" />)} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chat/:chatId" render={obj => <ChatLayout chatId={Number(obj.match.params.chatId)} />} />
       </Routes>
    </BrowserRouter>
    );
  }
}