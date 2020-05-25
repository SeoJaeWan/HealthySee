import React, { Component } from "react";

import Header from "../component_frame/component/Header";
import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import LoginCom from "../component_contet/component/LoginCom";

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
