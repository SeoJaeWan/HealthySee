import React from "react";
import { Container } from "../../style/Container_style";
import { InfCom } from "./style/MyPageEditCom_style";
import defaultImg from "../../../Images/defaultImg.jpg";
import ToggleButton from "../../common/ToggleButton";

const MyPageEditCom = ({ mypage, onChange, onComplete, onGoBack }) => {
  return (
    <Container>
      <InfCom>
        <div className="editButton">
          <button onClick={onGoBack} className="editButton">
            취소
          </button>
          <button onClick={onComplete} type="submit" className="editButton">
            완료
          </button>
        </div>
        <div className="flex">
          <div className="leftDiv">
            <h1>프로필 사진</h1>
            <div className="imgBox">
              <img
                className="imgDiv"
                src={
                  // mypage.ME_Profile_Photo ? mypage.ME_Profile_Photo : defaultImg
                  mypage.img ? mypage.img : defaultImg
                }
                alt="profile"
              />
            </div>

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
              <label htmlFor="nickname">닉네임</label>
              <input
                readOnly
                type="text"
                name="Account_AC_NickName"
                id="nickname"
                className="Contents"
                defaultValue={mypage.Account_AC_NickName}
              />
            </li>

            <li>
              <label htmlFor="ME_Scope">공개여부</label>

              <div className="toggleDiv">
                On
                <ToggleButton
                  name="ME_Scope"
                  type="checkbox"
                  value={mypage.ME_Scope}
                  onClick={onChange}
                />
                OFF
              </div>
            </li>
            <li>
              <label htmlFor="Weight">무게</label>
              <input
                type="text"
                name="ME_Weight"
                id="Weight"
                className="Contents"
                value={mypage.ME_Weight}
                onChange={onChange}
              />
            </li>
            <li>
              <label htmlFor="Height">키</label>
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
              <label htmlFor="Birth">생일</label>
              <input
                type="date"
                name="ME_Birth"
                id="Birth"
                className="Contents"
                value={mypage.ME_Birth}
                onChange={onChange}
              />
            </li>
            <li>
              <label htmlFor="ME_Gender">성별</label>
              <div className="toggleDiv">
                남
                <ToggleButton
                  name="ME_Gender"
                  type="checkbox"
                  value={mypage.ME_Gender}
                  onClick={onChange}
                />
                여
              </div>
            </li>
          </ul>
        </div>
      </InfCom>
    </Container>
  );
};

export default MyPageEditCom;
