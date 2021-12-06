import React from "react";
import ReactDOM from "react-dom";
// import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
// import Router from './components/Router';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChatLayout from '/component';
import Profile from './components';
import ChatHeader from './components';

const Message = (props) => {
  return (
    <div>
      <h1 className="heading">{props.text}</h1>
      <p className="paragraph">{props.paragr}</p>
    </div>
  );
};

// const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <Message
      text="Здесь мы будем создавать чат!"
      paragr="Чат создаём в рамках изучения библиотеки React"
    />
    <ChatHeader />
   <App/>
   <BrowserRouter>
   <Routes> 
        <Route exact path="/" render={() => (<Link to="/chat/0/" />)} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chat/:chatId" render={obj => <ChatLayout chatId={Number(obj.match.params.chatId)} />} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
