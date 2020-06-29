import React, { Component } from "react";

import List from "../component_frame/component/List";
import LoginForm from "../containers/Login/LoginForm";
import HeaderForm from "../containers/Header/HeaderForm";

class Login extends Component {
  render() {
    return (
      <div>
        <HeaderForm />
        <List />
        <LoginForm />
      </div>
    );
  }
}

export default Login;
