import React, { useEffect } from "react";
import MyPageEditCom from "../../component_contet/component/MyPage/MyPageEditCom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  updateField,
  updateMypage,
} from "../../modules/mypage/mypage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const MypageEditForm = ({ history }) => {
  const dispatch = useDispatch();
  const { mypage, owner } = useSelector(({ mypage }) => ({
    mypage: mypage.mypage,
    owner: mypage.owner,
  }));

  const onComplete = () => {
    console.log("durl?");
    dispatch(updateMypage(mypage));
    history.push(`/MyPage/${mypage.Account_AC_NickName}/Home`);
  };

  const onChange = (e) => {
    e.preventDefault();

    let { value, name, type } = e.target;
    console.log("durl?");
    if (type === "checkbox") {
      value = (mypage[name] - 1) * -1;
    }

    dispatch(updateField({ key: name, value }));
  };

  useEffect(() => {
    let mypage = localStorage.getItem("form");
    console.log(JSON.parse(mypage));

    dispatch(changeField({ key: "mypage", value: JSON.parse(mypage) }));
  }, [dispatch, changeField]);

  return (
    <MyPageEditCom
      mypage={mypage}
      onChange={onChange}
      onComplete={onComplete}
    />
  );
};

export default withRouter(MypageEditForm);
