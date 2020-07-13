import React, { useEffect, useState } from "react";
import MypageCom from "../../component_contet/component/MyPage/MyPageCom";
import { useDispatch, useSelector } from "react-redux";
import {
  readMypage,
  changeField,
  updateField,
} from "../../modules/mypage/mypage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const MypageForm = ({ match, history }) => {
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();
  const { mypage, user } = useSelector(({ mypage, user }) => ({
    mypage: mypage.mypage,
    user: user.user,
  }));

  const onUpdate = () => {
    localStorage.setItem("form", JSON.stringify(mypage));
    history.push("/MyPage/Edit");
  };

  const onRenderImg = (file) => {
    console.log(file);
    let render = new FileReader();
    let data = file.data;

    console.log(data);
    const type = mypage.ME_Profile_Type;
    console.log(type);
    let blob = new Blob([Uint8Array.from(data).buffer], { type });
    dispatch(updateField({ key: "originalProfile", value: blob }));
    render.readAsDataURL(blob);

    render.onloadend = () => {
      // console.log(render.result);
      setImg(render.result);
    };
  };

  useEffect(() => {
    if (mypage.ME_Profile_Photo) {
      console.log(mypage);
      console.log(mypage.ME_Profile_Photo);
      onRenderImg(mypage.ME_Profile_Photo);
    }
  }, [mypage.ME_Profile_Photo]);

  useEffect(() => {
    console.log("여기?");
    dispatch(changeField({ key: "owner", value: match.params.username }));
    dispatch(readMypage(match.params.username));
  }, [dispatch, match]);

  return (
    <MypageCom mypage={mypage} user={user} onUpdate={onUpdate} img={img} />
  );
};

export default withRouter(MypageForm);
