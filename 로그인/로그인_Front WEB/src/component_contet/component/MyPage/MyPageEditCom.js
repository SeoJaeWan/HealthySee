import React, { Component } from "react";
import { Container } from "../../style/Container";
import { Link } from "react-router-dom";
import {
  InfCom,
  CheckBox2,
  CheckBoxLabel,
  CheckBoxLabel1,
  CheckBox1,
} from "../../style/MyPageEditCom_Style";

class MyPageEditCom extends Component {
  render() {
    return (
      <Container>
        <InfCom>
          <div className="rowrserver">
            <button className="edit">
              <Link to="/Mypage">완료</Link>
            </button>
          </div>
          <div className="flex">
            <div className="leftDiv">
              <div className="Title">프로필 사진</div>
              <div className="ImgDiv"></div>
              <label className="InputIMG" htmlFor="file">이미지 업로드</label>
              <input className="hidden" type="file" name="file" id="file"/>
            </div>
            <div className="rightDiv">
              <div className="TowContetns">
                <div className="FlexGrow">
                  닉네임
                  <input type="text" name="nickname" className="Contents" />
                </div>
                <div className="FlexGrow">
                  공개여부
                  <div className="flexInput">
                    <div>On</div>

                    <CheckBox2 name="scope" id="checkbox2" type="checkbox" />
                    <CheckBoxLabel1 htmlFor="checkbox2" />

                    <div className="divwidth">OFF</div>
                  </div>
                </div>
              </div>
              <div className="TowContetns">
                <div className="FlexGrow">
                  무게
                  <input type="text" name="Weight" className="Contents" />
                </div>
                <div className="FlexGrow">
                  키
                  <input type="text" name="Height" className="Contents" />
                </div>
              </div>
              <div className="TowContetns">
                <div className="FlexGrow">
                  생일
                  <input type="text" name="Birth" className="Contents" />
                </div>
                <div className="FlexGrow">
                  성별
                  <div className="flexInput">
                    <div>남</div>
                    <CheckBox1 name="gender" id="checkbox" type="checkbox" />
                    <CheckBoxLabel htmlFor="checkbox" />
                    <div className="divwidth">여</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InfCom>
      </Container>
    );
  }
}

export default MyPageEditCom;
