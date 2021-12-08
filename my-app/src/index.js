import React from "react";
import ReactDOM from "react-dom";
// import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './styles.css';
// import ChatLayout from "./component/ChatLayout";
// import Profile from "./components/Profile";
 import ChatHeader from "./components/ChatHeader";

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
  </React.StrictMode>,
  document.getElementById("root")
);
