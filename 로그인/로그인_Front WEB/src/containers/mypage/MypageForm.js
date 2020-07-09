import React, { useEffect } from "react";
import MypageCom from "../../component_contet/component/MyPage/MyPageCom";
import { useDispatch, useSelector } from "react-redux";
import {
  readMypage,
  changeField,
  updateMypage,
} from "../../modules/mypage/mypage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const MypageForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const { mypage, user } = useSelector(({ mypage, user }) => ({
    mypage: mypage.mypage,
    user: user.user,
  }));

  const onUpdate = () => {
    localStorage.setItem("form", JSON.stringify(mypage));
    history.push("/MyPage/Edit");
  };

  useEffect(() => {
    console.log("여기?");
    dispatch(changeField({ key: "owner", value: match.params.username }));
    dispatch(readMypage(match.params.username));
  }, [dispatch, readMypage, changeField]);

  return <MypageCom mypage={mypage} user={user} onUpdate={onUpdate} />;
};

export default withRouter(MypageForm);
