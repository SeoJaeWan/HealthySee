import React, { Component } from "react";

import Header from "../component_frame/component/Header";
import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import HomeCom from "../component_contet/component/HomeCom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Manu />
        <List />
        <HomeCom />
      </div>
    );
  }
}

export default Home;
