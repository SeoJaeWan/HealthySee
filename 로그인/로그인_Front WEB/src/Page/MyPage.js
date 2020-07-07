import React, { Component } from "react";

import List from "../component_frame/component/List";
import MyPageCome from "../component_contet/component/MyPage/MyPageCom";
import { Route } from "react-router-dom";
import MyPageEditCome from "../component_contet/component/MyPage/MyPageEditCom";
import RegisterBO from "../component_contet/component/MyPage/Register/RegisterBOCom";
import RegisterWrite from "../component_contet/component/MyPage/Register/RegisterWriteCom";
import RegisterRead from "../component_contet/component/MyPage/Register/RegisterReadCom";
import RegisterTR from "../component_contet/component/MyPage/RegisterTRCom";
import Album from "../component_contet/component/MyPage/Album/Album";
import AlbumWrite from "../component_contet/component/MyPage/Album/AlbumWrite";
import HeaderForm from "../containers/Header/HeaderForm";
import GoalBO from "../component_contet/component/MyPage/Goal/GoalBO";
import GoalEdit from "../component_contet/component/MyPage/Goal/GoalEdit";

class MyPage extends Component {
  render() {
    return (
      <>
        <HeaderForm />
        <List />
        <Route exact path="/MyPage" component={MyPageCome} />
        <Route path="/MyPage/edit" component={MyPageEditCome} />
        <Route path="/MyPage/registerTR" component={RegisterTR} />
        <Route exact path="/MyPage/Album" component={Album} />   
        <Route path="/MyPage/Album/write" component={AlbumWrite} />
        <Route exact path="/MyPage/registerBO" component={RegisterBO} />
        <Route exact path="/MyPage/GoalBO" component={GoalBO} />
        <Route path="/MyPage/GoalBO/GoalEdit" component={GoalEdit} />
        <Route path="/MyPage/registerBO/write" component={RegisterWrite} />
        <Route path="/MyPage/registerBO/read" component={RegisterRead} />
      </>
    );
  }
}
export default MyPage;
