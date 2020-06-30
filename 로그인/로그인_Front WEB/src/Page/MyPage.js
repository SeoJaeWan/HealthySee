import React, { Component } from "react";

import List from "../component_frame/component/List";
import MyPageCome from "../component_contet/component/MyPage/MyPageCom";
import { Route } from "react-router-dom";
import MyPageEditCome from "../component_contet/component/MyPage/MyPageEditCom";
import RegisterBO from "../component_contet/component/MyPage/Register/RegisterBO";
import HeaderForm from "../containers/Header/HeaderForm";

class MyPage extends Component {
  render() {
    return (
      <>
        <HeaderForm />
        <List />
        <Route exact path="/MyPage" component={MyPageCome} />
        <Route path="/MyPage/edit" component={MyPageEditCome} />
        <Route path="/MyPage/registerEX" component={RegisterBO} />
      </>
    );
  }
}
export default MyPage;
