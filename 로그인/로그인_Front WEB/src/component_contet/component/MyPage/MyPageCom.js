import React from "react";
import { Container } from "../../style/Container";
import { Link } from "react-router-dom";
import { InfCom } from "../../style/Mypage/MyPageCom_Style";
import GoalCom from "./Goal/GoalCom"

const MypageCom = () => {
    return (
      <Container>
        <InfCom>
          <div className="rowrserver">
            <button className="edit">
              <Link to="/Mypage/edit">편집</Link>
            </button>
          </div>
          <div className="flex">
            <div className="leftDiv">
              <div className="Title">프로필 사진</div>
              <div className="ImgDiv"></div>
              <div className="PublicDiv">공개여부 : 공개</div>
            </div>
            <div className="rightDiv">
              <div className="TowContetns">
                <div className="FlexGrow">
                  이름
                  <div className="Contents">무게표시</div>
                </div>
                <div className="FlexGrow">
                  플렛폼<div className="Contents">플렛폼</div>
                </div>
              </div>
              <div className="TowContetns">
                <div className="FlexGrow">
                  무게
                  <div className="Contents">무게표시</div>
                </div>
                <div className="FlexGrow">
                  키<div className="Contents">키표시</div>
                </div>
              </div>
              <div className="TowContetns">
                <div className="FlexGrow">
                  생일
                  <div className="Contents">생일</div>
                </div>
                <div className="FlexGrow">
                  성별<div className="Contents">성별</div>
                </div>
              </div>
              <div className="ButtonDiv">
                <button className="Buttons">
                  <Link className="ButtonLink" to="/Mypage/registerTR">
                    트레이너 등록하기
                  </Link>
                </button>

                <button className="Buttons">
                  <Link className="ButtonLink" to="/Mypage/registerBO">
                    운동 건의
                  </Link>
                </button>
                <button className="Buttons">
                  <Link className="ButtonLink" to="/Mypage/Album">
                    앨 범
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="IntroForm">
            <div className="Introtitle">
              자기소개
          </div>
            <div className="BoardForm">
              <div className="IntroInfo">
                내용이 들어갈곳
            </div>
            </div>
          </div>
        </InfCom>
        <GoalCom/>
      </Container>
    );
  
}

export default MypageCom;
