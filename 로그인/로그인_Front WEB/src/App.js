import React from "react";
import { Route } from "react-router-dom";

import Main from "./Page/Main";
import Login from "./Page/Login";
import Home from "./Page/Home";
import Signup from "./Page/Signup";
import Board from "./Page/Board";

import { createGlobalStyle } from "styled-components";

const App = () => {
  const GlobalStyle = createGlobalStyle`

      @font-face {
      font-family: "font";
      src: url(${require("./Font/BMJUA.eot")});
      src: url(${require("./Font/BMJUA.woff2")}) format('woff2'),
      url(${require("./Font/BMJUA.woff")}) format('woff'),
      url(${require("./Font/BMJUA.ttf")}) format('ttf');
    }
    body {font-family: "font" ;margin:0;color:#676a72;} 
    a {text-decoration: none; color: #676a72;}
    button{font-family: "font"; color: #676a72;border:none;background-color:white; box-shadow:0px 0px 0px white;}
    pre{font-family: "font"}
    `;

  return (
    <div>
      <GlobalStyle />
      <Route exact path="/" component={Main} />
      <Route path="/Login" component={Login} />
      <Route path="/Home" component={Home} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Board/:board" component={Board} />
    </div>
  );
};

export default App;
