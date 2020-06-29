import React, { Component } from "react";

import List from "../component_frame/component/List";
import MainCom from "../component_contet/component/MainCom";
import HeaderForm from "../containers/Header/HeaderForm";

class Main extends Component {
  render() {
    return (
      <>
        <HeaderForm />
        <List />
        <MainCom />
      </>
    );
  }
}
export default Main;
