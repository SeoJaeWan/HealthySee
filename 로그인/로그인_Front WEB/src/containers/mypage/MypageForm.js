import React, { useEffect } from "react";
import MypageCom from "../../component_contet/component/MyPage/MyPageCom";
import { useDispatch, useSelector } from "react-redux";
import { readMypage, changeField } from "../../modules/mypage/mypage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const MypageForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const { mypage, owner, user } = useSelector(({ mypage, user }) => ({
    mypage: mypage.mypage,
    owner: mypage.owner,
    user: user.user,
  }));

  const onUpdate = () => {
    localStorage.setItem("form", JSON.stringify(mypage));

    history.push("/MyPage/edit");
  };

  useEffect(() => {
    console.log(match.params.username);
    dispatch(changeField({ key: "owner", data: match.params.username }));
    dispatch(readMypage(match.params.username));
  }, [dispatch, owner, readMypage, changeField]);

  return <MypageCom mypage={mypage} user={user} onUpdate={onUpdate} />;
};

export default withRouter(MypageForm);
