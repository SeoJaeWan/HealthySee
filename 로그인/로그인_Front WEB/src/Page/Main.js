import React, { Component } from "react";

import Header from "../component_frame/component/Header";
import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import MainCom from "../component_contet/component/MainCom";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Manu />
        <List />
        <MainCom />
      </div>
    );
  }
}
export default Main;
