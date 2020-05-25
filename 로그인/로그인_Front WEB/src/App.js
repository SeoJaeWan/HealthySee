import React, { Component } from "react";
import { Route } from "react-router-dom";

import Main from "./Page/Main";
import Login from "./Page/Login";
import Home from "./Page/Home";
import Signup from "./Page/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/Login/" component={Login} />
        <Route path="/Home/" component={Home} />
        <Route path="/Signup/" component={Signup} />
      </div>
    );
  }
}

export default App;
