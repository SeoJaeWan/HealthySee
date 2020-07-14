import React, { useEffect } from "react";
import MypageCom from "../../component_contet/component/MyPage/MyPageCom";
import { useDispatch, useSelector } from "react-redux";
import { readMypage, updateField } from "../../modules/mypage/mypage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { OnRenderImg } from "../common/OnRenderImg";

const MypageForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const { mypage, user, img } = useSelector(({ mypage, user }) => ({
    mypage: mypage.mypage,
    img: mypage.img,
    user: user.user,
  }));

  const onUpdate = () => {
    localStorage.setItem("form", JSON.stringify(mypage));
    history.push("/MyPage/Edit");
  };

  useEffect(() => {
    if (mypage.ME_Profile_Photo) {
      let data = mypage.ME_Profile_Photo.data;
      let type = mypage.ME_Profile_Type;

      let blob = new Blob([Uint8Array.from(data).buffer], { type });

      dispatch(updateField({ key: "originalProfile", value: blob }));

      OnRenderImg(blob, updateField);
    }
  }, [mypage.ME_Profile_Photo, mypage.ME_Profile_Type, dispatch]);

  useEffect(() => {
    dispatch(readMypage(match.params.username));
  }, [dispatch, match]);

  return (
    <MypageCom mypage={mypage} user={user} onUpdate={onUpdate} img={img} />
  );
};

export default withRouter(MypageForm);
