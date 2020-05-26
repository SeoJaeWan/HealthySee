import React, { Component } from "react";

import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import LoginForm from "../containers/Login/LoginForm";
import HeaderForm from "../containers/Header/HeaderForm";

class Login extends Component {
  render() {
    return (
      <div>
        <HeaderForm />
        <Manu />
        <List />

        <LoginForm />
      </div>
    );
  }
}

export default Login;
