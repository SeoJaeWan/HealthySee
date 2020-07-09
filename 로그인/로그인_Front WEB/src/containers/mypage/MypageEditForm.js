import React, { useEffect } from "react";
import MyPageEditCom from "../../component_contet/component/MyPage/MyPageEditCom";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../modules/mypage/mypage";

const MypageEditForm = () => {
  const dispatch = useDispatch();
  const { mypage, owner } = useSelector(({ mypage }) => ({
    mypage: mypage.mypage,
    owner: mypage.owner,
  }));

  useEffect(() => {
    let mypage = localStorage.getItem("form");
    console.log(JSON.parse(mypage));

    dispatch(changeField({ key: "mypage", data: JSON.parse(mypage) }));
  }, [dispatch, changeField]);

  return <MyPageEditCom mypage={mypage} />;
};

export default MypageEditForm;
