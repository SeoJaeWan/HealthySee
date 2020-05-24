import React, { Component } from "react";

import Header from "../component_frame/Header";
import Manu from "../component_frame/Manu";
import List from "../component_frame/List";
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
