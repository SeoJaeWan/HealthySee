import React from "react";
import { Container } from "../../style/Container";
import { Link } from "react-router-dom";
import {
  InfCom,
  CheckBox,
  CheckBoxLabel,
} from "../../style/Mypage/MyPageEditCom_Style";

const MyPageEditCom = ({ mypage, onChange, onComplete }) => {
  return (
    <Container>
      <InfCom>
        <div className="rowrserver">
          <button className="edit">
            <Link to={`/MyPage/${mypage.Account_AC_NickName}/Home`}>취소</Link>
          </button>
          <button onClick={onComplete} type="submit" className="edit">
            완료
          </button>
        </div>
        <div className="flex">
          <div className="leftDiv">
            <div className="Title">프로필 사진</div>
            <div className="ImgDiv"></div>
            <label className="InputIMG" htmlFor="file">
              이미지 업로드
            </label>
            <input className="hidden" type="file" name="file" id="file" />
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
                  type="date"
                  name="ME_Birth"
                  className="Contents"
                  value={mypage.ME_Birth}
                  onChange={onChange}
                />
              </div>
              <div className="FlexGrow">
                성별
                <div className="flexInput">
                  <div>남</div>
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
