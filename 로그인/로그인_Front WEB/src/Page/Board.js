import React, { Component } from "react";

import Header from "../component_frame/component/Header";
import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import BoardCom from "../component_contet/component/BoardCom";

class Board extends Component {
  render() {
    return (
      <div>
        <Header />
        <Manu />
        <List />
        <BoardCom/>
      </div>
    );
  }
}

export default Board;
