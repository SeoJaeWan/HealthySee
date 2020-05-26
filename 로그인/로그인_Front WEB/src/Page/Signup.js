import React, { Component } from "react";

import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import SignupForm from "../containers/Signup/SignupForm";
import HeaderForm from "../containers/Header/HeaderForm";

class Signup extends Component {
  render() {
    return (
      <div>
        <HeaderForm />
        <Manu />
        <List />
        <SignupForm />
      </div>
    );
  }
}

export default Signup;
