import React, { useState, useEffect } from "react";
import { Container } from "../../style/Container_style";
import { InfCom } from "./style/MyPageEditCom_style";
import defaultImg from "../../../Images/defaultImg.jpg";
import ToggleButton from "../../common/ToggleButton";

const MyPageEditCom = ({ mypage, onChange, onComplete, onGoBack }) => {
  return (
    <Container>
      <InfCom>
        <div className="rowrserver">
          <button onClick={onGoBack} className="edit">
            취소
          </button>
          <button onClick={onComplete} type="submit" className="edit">
            완료
          </button>
        </div>
        <div className="flex">
          <div className="leftDiv">
            <div className="Title">프로필 사진</div>

            <img
              className="ImgDiv"
              src={
                // mypage.ME_Profile_Photo ? mypage.ME_Profile_Photo : defaultImg
                mypage.img ? mypage.img : defaultImg
              }
              alt="profile"
            />

            <label className="InputIMG" htmlFor="file">
              이미지 업로드
            </label>
            <input
              className="hidden"
              type="file"
              name="originalProfile"
              id="file"
              onChange={onChange}
            />
          </div>
          <ul className="rightDiv">
            <li>
              <label htmlfor="nickname" className="FlexGrow">
                닉네임
              </label>
              <input
                readOnly
                type="text"
                name="Account_AC_NickName"
                className="Contents"
                defaultValue={mypage.Account_AC_NickName}
              />
            </li>

            <li className="FlexGrow">
              공개여부 On
              <ToggleButton
                name="ME_Scope"
                type="checkbox"
                value={mypage.ME_Scope}
                onClick={onChange}
              />
              OFF
            </li>
            <li>
              <label htmlFor="Weight" className="FlexGrow">
                무게
              </label>
              <input
                type="text"
                name="ME_Weight"
                Id="Weight"
                className="Contents"
                value={mypage.ME_Weight}
                onChange={onChange}
              />
            </li>
            <li>
              <label htmlFor="Height" className="FlexGrow">
                키
              </label>
              <input
                type="text"
                name="ME_Height"
                id="Height"
                className="Contents"
                value={mypage.ME_Height}
                onChange={onChange}
              />
            </li>
            <li>
              <label htmlFor="Birth" className="FlexGrow">
                생일
              </label>
              <input
                type="date"
                name="ME_Birth"
                Id="Birth"
                className="Contents"
                value={mypage.ME_Birth}
                onChange={onChange}
              />
            </li>
            <li>
              <div className="FlexGrow">
                성별
                <div className="flexInput">
                  <div>남</div>
                  <ToggleButton
                    name="ME_Gender"
                    type="checkbox"
                    value={mypage.ME_Gender}
                    onClick={onChange}
                  />
                  <div className="divwidth">여</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </InfCom>
    </Container>
  );
};

export default MyPageEditCom;
