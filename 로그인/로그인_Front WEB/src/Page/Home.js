import React, { Component } from "react";

import List from "../component_frame/component/List";
import HomeCom from "../component_contet/component/HomeCom";
import HeaderForm from "../containers/Header/HeaderForm";

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderForm />
        <List />
        <HomeCom />
      </div>
    );
  }
}

export default Home;
