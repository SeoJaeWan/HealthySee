import React, { Component } from "react";

import Header from "../component_frame/component/Header";
import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import LoginForm from "../containers/Login/LoginForm";

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Manu />
        <List />

        <LoginForm />
      </div>
    );
  }
}

export default Login;
