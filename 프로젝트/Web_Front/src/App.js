import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./Page/Home";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Board from "./Page/Board";
import MyPage from "./Page/MyPage";
import Album from "./Page/Album";
import Training from "./Page/Training";

import { createGlobalStyle } from "styled-components";
import HeaderForm from "./containers/header/HeaderForm";
import Pose from "./Page/Pose";
import Ai from "./Page/Ai";
import Set from "./Page/Set";

const App = () => {
  const { type } = useSelector(({ training }) => ({
    type: training.type,
  }));
  const GlobalStyle = createGlobalStyle`

      @font-face {
      font-family: "font";
      src: url(${require("./Font/BMJUA.eot")});
      src: url(${require("./Font/BMJUA.woff2")}) format('woff2'),
      url(${require("./Font/BMJUA.woff")}) format('woff'),
      url(${require("./Font/BMJUA.ttf")}) format('ttf');
    }
    * {
      font-family: "font" ;
    margin:0;color:#676a72;
  } h1,h2,h3,h4,h5,p {
    font-family: "font" ;
  }
  
    a {&:hover {
      color: #858994;
      cursor: pointer;
    }text-decoration: none; 
    color: #676a72;}
    button{&:hover {
      color: #858994;
      cursor: pointer;
    }font-family: "font"; 
    color: #676a72;border:none;
    background-color:white; 
    box-shadow:0px 0px 0px white;
  }
    pre{font-family: "font"}
    h1{margin: 0; font-size:3rem;}
    input{font-family: "font"}
    `;

  return (
    <div>
      {type !== "app" && <HeaderForm />}
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Board" component={Board} />
      <Route path="/MyPage" component={MyPage} />
      <Route path="/Album/:name" component={Album} />
      <Route path="/Training/:type" component={Training} />
      <Route path="/Set" component={Set} />
      <Route path="/Pose" component={Pose} />
      <Route path="/AI" component={Ai} />
    </div>
  );
};

export default App;
