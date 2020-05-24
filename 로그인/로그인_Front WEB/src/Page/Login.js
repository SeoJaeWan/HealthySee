import React, { Component } from "react";

import Header from "../component_frame/Header";
import Manu from "../component_frame/Manu";
import List from "../component_frame/List";
import LoginCom from "../component_contet/LoginCom";

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Manu />
        <List />

        <LoginCom />
      </div>
    );
  }
}

export default Login;
