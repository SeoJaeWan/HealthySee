import React from "react";
import { Container } from "../../style/Container";
import { Link } from "react-router-dom";
import { InfCom } from "../../style/Mypage/MyPageCom_Style";
import GoalCom from "./Goal/GoalCom";
import defaultImg from "../../../Images/defaultImg.jpg";

const MypageCom = ({ mypage, user, onUpdate, img }) => {
  return (
    <Container>
      <InfCom>
        {user === mypage.Account_AC_NickName && (
          <div className="rowrserver">
            <button type="button" className="edit" onClick={onUpdate}>
              편집
            </button>
          </div>
        )}
        <div className="flex">
          <div className="leftDiv">
            <div className="Title">프로필 사진</div>
            <img
              className="ImgDiv"
              src={mypage.img ? mypage.img : defaultImg}
              alt="profile"
            />
            <div className="PublicDiv">
              공개여부 : {mypage.ME_Scope === 1 ? "공개" : "비공개"}
            </div>
          </div>
          <div className="rightDiv">
            <div className="TowContetns">
              <div className="FlexGrow">
                이름
                <div className="Contents">{mypage.Account_AC_NickName}</div>
              </div>
              <div className="FlexGrow">
                상태<div className="Contents">{mypage.ME_Certificate}</div>
              </div>
            </div>
            <div className="TowContetns">
              <div className="FlexGrow">
                무게
                <div className="Contents">{mypage.ME_Weight}</div>
              </div>
              <div className="FlexGrow">
                키<div className="Contents">{mypage.ME_Height}</div>
              </div>
            </div>
            <div className="TowContetns">
              <div className="FlexGrow">
                생일
                <div className="Contents">{mypage.ME_Birth}</div>
              </div>
              <div className="FlexGrow">
                성별
                <div className="Contents">
                  {mypage.ME_Gender === 1 ? "남자" : "여자"}
                </div>
              </div>
            </div>
            <div className="ButtonDiv">
              <button type="button" className="Buttons">
                <Link className="ButtonLink" to="/Mypage/registerTR">
                  트레이너 등록하기
                </Link>
              </button>

              <button type="button" className="Buttons">
                <Link className="ButtonLink" to="/Mypage/registerBO">
                  운동 건의
                </Link>
              </button>
              <button type="button" className="Buttons">
                <Link className="ButtonLink" to="/Mypage/Album">
                  앨 범
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="IntroForm">
          <div className="Introtitle">자기소개</div>
          <div className="BoardForm">
            <div className="IntroInfo">내용이 들어갈곳</div>
          </div>
        </div>
      </InfCom>
      <GoalCom />
    </Container>
  );
};

export default MypageCom;
