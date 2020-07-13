import React, { useEffect, useState, useCallback } from "react";
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
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();
  const { mypage, user, isUpdate } = useSelector(({ mypage, user }) => ({
    mypage: mypage.mypage,
    owner: mypage.owner,
    originalProfile: mypage.originalProfile,
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
    formData.append("ME_Profile_Photo", mypage.originalProfile);

    dispatch(updateMypage(formData));
  };

  const onGoBack = () => {
    history.goBack();
    dispatch(initialize());
  };

  const onChange = (e) => {
    e.preventDefault();

    let { value, name, type } = e.target;
    if (type === "checkbox") value = (mypage[name] - 1) * -1;
    else if (type === "file")
      // value = e.target.value
      value = e.target.files[0];

    dispatch(updateField({ key: name, value }));
  };

  const onRenderImg = (file) => {
    console.log(file);
    let render = new FileReader();
    render.readAsDataURL(file);

    render.onloadend = () => {
      // console.log(render.result);
      setImg(render.result);
    };
  };

  useEffect(() => {
    console.log(mypage.originalProfile);
    if (mypage.originalProfile) onRenderImg(mypage.originalProfile);
  }, [mypage.originalProfile]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    } else if (isUpdate) onGoBack();
  }, [user, isUpdate, history, mypage]);

  return (
    <MyPageEditCom
      mypage={mypage}
      onChange={onChange}
      onComplete={onComplete}
      onGoBack={onGoBack}
      img={img}
    />
  );
};

export default withRouter(MypageEditForm);
