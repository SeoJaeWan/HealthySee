import React, { useEffect, useCallback, useState, createRef } from "react";
import MyPageEditCom from "../../component_contet/component/mypage/MyPageEditCom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  updateMypage,
  initialize,
} from "../../modules/mypage/mypage";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { RenderImg } from "../common/RenderImg";
import ProfileImageModal from "../../component_contet/component/mypage/ProfileImageModal";

const MypageEditForm = ({ history }) => {
  const dispatch = useDispatch();
  const { mypage, user, isUpdate } = useSelector(({ mypage, user }) => ({
    mypage: mypage.mypage,
    isUpdate: mypage.isUpdate,
    user: user.user,
  }));

  const [imgSize, setImgSize] = useState({
    img: null,
    width: 250,
    height: 250,
  });

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

    dispatch(updateField({ key: name, value }));
  };

  // 2020 07 23
  // 서재완
  // 프로필 사진을 받아와서 blob을 이미지로 변경 후 해당 이미지를 state에 넣음

  const inputProfile = (e, p5) => {
    let imgs;
    console.log(e.target.files[0].type);
    if (e.target.files[0].type.indexOf("image") !== -1) {
      let blobUrl = URL.createObjectURL(e.target.files[0]);
      imgs = p5.createImg(blobUrl, "profile", "", () =>
        setImgSize((pre) => ({ ...pre, img: imgs }))
      );

      imgs.hide();

      dispatch(
        updateField({ key: "originalProfile", value: e.target.files[0] })
      );
    }
  };

  const setup = (p5) => {
    let div = p5.select(".leftDiv");
    let inp = p5.select("#file");

    div && inp.input((e) => inputProfile(e, p5));

    console.log(div);
    div && div.child(inp);
  };

  // 2020 07 23
  // 서재완
  // 이미지를 state에 정상적으로 들어오게 한 경우 width와 height 값을 계산하여 추가로 마이페이지에 나오게 하기 위해서 저장
  useEffect(() => {
    if (imgSize.img) {
      console.log(imgSize.img.height);
      let width;
      let height;

      if (imgSize.img.width + imgSize.img.height < 500) {
        width = imgSize.img.width;
        height = imgSize.img.height;
      } else if (imgSize.img.width >= imgSize.img.height) {
        if (imgSize.img.height < 250) height = imgSize.img.height;
        else height = 250;
        width = imgSize.img.width / (imgSize.img.height / 250);
      } else {
        console.log(imgSize.img.width / 250, width);
        if (imgSize.img.width < 250) height = imgSize.img.width;
        else width = 250;
        height = imgSize.img.height / (imgSize.img.width / 250);
      }

      setImgSize((pre) => ({
        ...pre,
        width,
        height,
      }));
    }
  }, [imgSize.img]);

  useEffect(() => {
    if (mypage.originalProfile) {
      console.log("여ㅑ기");
      RenderImg(mypage.originalProfile, updateField, dispatch);
    }
  }, [mypage.originalProfile, dispatch]);

  useEffect(() => {
    if (!user) {
      history.push("/");
    } else if (isUpdate) onGoBack();
  }, [user, isUpdate, history, onGoBack]);

  //Mypage 프로필 사진 변경

  const [preview, setPreview] = useState(null);
  const [modal, setModal] = useState(false);
  const [scale, setScale] = useState(1);
  const cropper = createRef();

  const getImagePreview = () => {
    b64toBlob(cropper.current.getImageScaledToCanvas().toDataURL());

    setModal(!modal);
  };
  const b64toBlob = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    dispatch(updateField({ key: "originalProfile", value: blob }));
  };

  const onChangeModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <MyPageEditCom
        mypage={mypage}
        preview={preview}
        setPreview={setPreview}
        getImagePreview={getImagePreview}
        onChangeModal={onChangeModal}
        cropper={cropper}
        onChange={onChange}
        onComplete={onComplete}
        onGoBack={onGoBack}
        setup={setup}
        imgSize={imgSize}
      />
      <ProfileImageModal
        visible={modal}
        scale={scale}
        setScale={setScale}
        getImagePreview={getImagePreview}
        cropper={cropper}
        mypage={mypage}
        onCancel={onChangeModal}
      />
    </>
  );
};

export default withRouter(MypageEditForm);
