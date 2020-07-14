import React, { useState, useEffect } from "react";
import { Container } from "../../style/Container";
import {
  InfCom,
  CheckBox,
  CheckBoxLabel,
} from "../../style/Mypage/MyPageEditCom_Style";
import defaultImg from "../../../Images/defaultImg.jpg";

const MyPageEditCom = ({ mypage, onChange, onComplete, onGoBack }) => {
  return (
    <Container>
      <InfCom>
        <div className="rowrserver">
          <button type="button" onClick={onGoBack} className="edit">
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
          <div className="rightDiv">
            <div className="TowContetns">
              <div className="FlexGrow">
                닉네임
                <input
                  readOnly
                  type="text"
                  name="Account_AC_NickName"
                  className="Contents"
                  defaultValue={mypage.Account_AC_NickName}
                />
              </div>
              <div className="FlexGrow">
                공개여부
                <div className="flexInput">
                  <div>On</div>

                  <CheckBox
                    name="ME_Scope"
                    id="scopeBox"
                    type="checkbox"
                    value={mypage.ME_Scope}
                    onClick={onChange}
                  />
                  <CheckBoxLabel htmlFor="scopeBox" check={mypage.ME_Scope} />

                  <div className="divwidth">OFF</div>
                </div>
              </div>
            </div>
            <div className="TowContetns">
              <div className="FlexGrow">
                무게
                <input
                  type="text"
                  name="ME_Weight"
                  className="Contents"
                  value={mypage.ME_Weight}
                  onChange={onChange}
                />
              </div>
              <div className="FlexGrow">
                키
                <input
                  type="text"
                  name="ME_Height"
                  className="Contents"
                  value={mypage.ME_Height}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="TowContetns">
              <div className="FlexGrow">
                생일
                <input
                  type={mypage.ME_Birth ? "date" : "text"}
                  name="ME_Birth"
                  className="Contents"
                  value={mypage.ME_Birth ? mypage.ME_Birth : ""}
                  onChange={onChange}
                />
              </div>
              <div className="FlexGrow">
                성별
                <div className="flexInput">
                  <div>남{mypage.ME_Gender}</div>
                  <CheckBox
                    name="ME_Gender"
                    id="genderBox"
                    type="checkbox"
                    value={mypage.ME_Gender}
                    onClick={onChange}
                  />
                  <CheckBoxLabel htmlFor="genderBox" check={mypage.ME_Gender} />
                  <div className="divwidth">여</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="IntroForm">
          <div className="Introtitle">자기소개</div>
          <div className="BoardForm">
            <textarea className="IntroInfo"></textarea>ㄴ
          </div>
        </div>
      </InfCom>
    </Container>
  );
};

export default MyPageEditCom;
