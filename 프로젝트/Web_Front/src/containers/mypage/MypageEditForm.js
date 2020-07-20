import React, { useEffect, useCallback } from "react";
import MyPageEditCom from "../../component_contet/component/mypage/MyPageEditCom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  updateMypage,
  initialize,
} from "../../modules/mypage/mypage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { onRenderImg } from "../common/onRenderImg";

const MypageEditForm = ({ history }) => {
  const dispatch = useDispatch();
  const { mypage, user, isUpdate } = useSelector(({ mypage, user }) => ({
    mypage: mypage.mypage,
    isUpdate: mypage.isUpdate,
    user: user.user,
  }));

  const onComplete = () => {
    const formData = new FormData();

    formData.append("ME_Scope", mypage.ME_Scope);
    formData.append("ME_Weight", mypage.ME_Weight);
    formData.append("ME_Height", mypage.ME_Height);
    formData.append("ME_Birth", mypage.ME_Birth);
    formData.append("ME_Gender", mypage.ME_Gender);
    formData.append("Account_AC_NickName", mypage.Account_AC_NickName);
    formData.append("files", mypage.originalProfile);

    dispatch(updateMypage(formData));
  };

  const onGoBack = useCallback(() => {
    history.goBack();
    dispatch(initialize());
  }, [dispatch, history]);

  const onChange = (e) => {
    e.preventDefault();

    let { value, name, type } = e.target;
    if (type === "checkbox") value = (mypage[name] - 1) * -1;
    else if (type === "file")
      // value = e.target.value
      value = e.target.files[0];

    dispatch(updateField({ key: name, value }));
  };

  // const onRenderImg = (file) => {
  //   let render = new FileReader();
  //   render.readAsDataURL(file);

  //   render.onloadend = () => {
  //     // console.log(render.result);
  //     setImg(render.result);
  //   };
  // };

  useEffect(() => {
    if (mypage.originalProfile) {
      console.log("여ㅑ기");
      onRenderImg(mypage.originalProfile, updateField, dispatch);
    }
  }, [mypage.originalProfile, dispatch]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    } else if (isUpdate) onGoBack();
  }, [user, isUpdate, history, onGoBack]);

  return (
    <MyPageEditCom
      mypage={mypage}
      onChange={onChange}
      onComplete={onComplete}
      onGoBack={onGoBack}
    />
  );
};

export default withRouter(MypageEditForm);
