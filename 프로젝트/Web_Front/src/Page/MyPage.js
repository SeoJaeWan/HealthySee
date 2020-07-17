import React from "react";

import { Route } from "react-router-dom";
import RegisterBO from "../component_contet/component/mypage/register/RegisterBOCom";
import RegisterWrite from "../component_contet/component/mypage/register/RegisterWriteCom";
import RegisterRead from "../component_contet/component/mypage/register/RegisterReadCom";
import RegisterTR from "../component_contet/component/mypage/RegisterTRCom";

import MypageForm from "../containers/mypage/MypageForm";
import MypageEditForm from "../containers/mypage/MypageEditForm";

const MyPage = () => {
  return (
    <>
      <Route path="/MyPage/Edit" component={MypageEditForm} />
      <Route path="/MyPage/registerTR" component={RegisterTR} />
      <Route exact path="/MyPage/registerBO" component={RegisterBO} />
      <Route path="/MyPage/registerBO/write" component={RegisterWrite} />
      <Route path="/MyPage/registerBO/read" component={RegisterRead} />
      <Route exact path="/MyPage/:username/Home" component={MypageForm} />
    </>
  );
};
export default MyPage;
