import React, { useEffect } from "react";
import MypageCom from "../../component_contet/component/mypage/MyPageCom";
import { useDispatch, useSelector } from "react-redux";
import { readMypage, updateField } from "../../modules/mypage/mypage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { onRenderImg } from "../common/onRenderImg";

const MypageForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const { mypage, user, loading, mypageError } = useSelector(
    ({ mypage, user, loading }) => ({
      mypage: mypage.mypage,
      user: user.user,
      loading: loading["mypage/READ_MYPAGE"],
      mypageError: mypage.mypageError,
    })
  );

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

      onRenderImg(blob, updateField, dispatch);
    }
  }, [mypage.ME_Profile_Photo, mypage.ME_Profile_Type, dispatch]);

  useEffect(() => {
    console.log(user);
    dispatch(readMypage({ owner: match.params.username, username: user }));
  }, [dispatch, match, user]);

  if (!mypage || loading) return null;
  return (
    <MypageCom
      mypage={mypage}
      user={user}
      onUpdate={onUpdate}
      mypageError={mypageError}
    />
  );
};

export default withRouter(MypageForm);
