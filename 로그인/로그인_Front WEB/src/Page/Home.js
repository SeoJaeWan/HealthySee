import React, { Component } from "react";

import Header from "../component_frame/Header";
import Manu from "../component_frame/Manu";
import List from "../component_frame/List";
import HomeCom from "../component_contet/HomeCom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Manu />
        <List />
        <HomeCom/>
      </div>
    );
  }
}

export default Home;
