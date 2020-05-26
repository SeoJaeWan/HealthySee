import React, { Component } from "react";

import Manu from "../component_frame/component/Manu";
import List from "../component_frame/component/List";
import HomeCom from "../component_contet/component/HomeCom";
import HeaderForm from "../containers/Header/HeaderForm";

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderForm />
        <Manu />
        <List />
        <HomeCom />
      </div>
    );
  }
}

export default Home;
