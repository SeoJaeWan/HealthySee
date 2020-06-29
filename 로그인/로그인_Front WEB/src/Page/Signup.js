import React, { Component } from "react";

import List from "../component_frame/component/List";
import SignupForm from "../containers/Signup/SignupForm";
import HeaderForm from "../containers/Header/HeaderForm";

class Signup extends Component {
  render() {
    return (
      <div>
        <HeaderForm />
        <List />
        <SignupForm />
      </div>
    );
  }
}

export default Signup;
