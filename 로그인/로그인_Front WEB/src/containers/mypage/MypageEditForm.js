import React, { useEffect } from "react";
import MyPageEditCom from "../../component_contet/component/MyPage/MyPageEditCom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  updateField,
  updateMypage,
  initialize,
} from "../../modules/mypage/mypage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const MypageEditForm = ({ history }) => {
  const dispatch = useDispatch();
  const { mypage, owner, user, isUpdate } = useSelector(({ mypage, user }) => ({
    mypage: mypage.mypage,
    owner: mypage.owner,
    isUpdate: mypage.isUpdate,
    user: user.user,
  }));

  const onComplete = () => {
    console.log("durl?");
    dispatch(updateMypage(mypage));
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

    dispatch(changeField({ key: "mypage", value: JSON.parse(mypage) }));
  }, [dispatch, changeField]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    } else if (isUpdate)
      history.push(`/MyPage/${mypage.Account_AC_NickName}/Home`);
    return () => {
      // 언마운트 시 초기화
      dispatch(initialize());
      localStorage.setItem("post", "");
    };
  }, [user, isUpdate, history]);

  return (
    <MyPageEditCom
      mypage={mypage}
      onChange={onChange}
      onComplete={onComplete}
    />
  );
};

export default withRouter(MypageEditForm);
