import React, { Component } from "react";

import Header from "../component_frame/component/Header";
import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import SignupForm from "../containers/Signup/SignupForm";

class Signup extends Component {
  render() {
    return (
      <div>
        <Header />
        <Manu />
        <List />
        <SignupForm />
      </div>
    );
  }
}

export default Signup;
