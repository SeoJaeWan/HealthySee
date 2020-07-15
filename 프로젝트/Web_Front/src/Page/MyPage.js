import React, { Component } from "react"

import { Route } from "react-router-dom"
import RegisterBO from "../component_contet/component/MyPage/Register/RegisterBOCom"
import RegisterWrite from "../component_contet/component/MyPage/Register/RegisterWriteCom"
import RegisterRead from "../component_contet/component/MyPage/Register/RegisterReadCom"
import RegisterTR from "../component_contet/component/MyPage/RegisterTRCom"
import Album from "../component_contet/component/MyPage/Album/Album"
import AlbumWrite from "../component_contet/component/MyPage/Album/AlbumWrite"

import MypageForm from "../containers/mypage/MypageForm"
import MypageEditForm from "../containers/mypage/MypageEditForm"

class MyPage extends Component {
  render() {
    return (
      <>
        <Route path="/MyPage/Edit" component={MypageEditForm} />
        <Route path="/MyPage/registerTR" component={RegisterTR} />
        <Route exact path="/MyPage/Album" component={Album} />
        <Route path="/MyPage/Album/write" component={AlbumWrite} />
        <Route exact path="/MyPage/registerBO" component={RegisterBO} />
        <Route path="/MyPage/registerBO/write" component={RegisterWrite} />
        <Route path="/MyPage/registerBO/read" component={RegisterRead} />
        <Route exact path="/MyPage/:username/Home" component={MypageForm} />
      </>
    )
  }
}
export default MyPage
