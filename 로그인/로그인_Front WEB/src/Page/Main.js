import React, { Component } from "react";

import Header from "../component_frame/Header";
import Manu from "../component_frame/Manu";
import List from "../component_frame/List";
import MainCom from "../component_contet/MainCom";

class Main extends Component {
  render() {
    return <div>
        <Header/>
        <Manu/>
        <List/>
        <MainCom/>
        </div>;
  }
}
export default Main;
