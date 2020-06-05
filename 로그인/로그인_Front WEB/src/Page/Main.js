import React, { Component } from "react";

import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import MainCom from "../component_contet/component/MainCom";
import HeaderForm from "../containers/Header/HeaderForm";

class Main extends Component {
  render() {
    return (
      <>
        <HeaderForm />
        <Manu />
        <List />
        <MainCom />
      </>
    );
  }
}
export default Main;
