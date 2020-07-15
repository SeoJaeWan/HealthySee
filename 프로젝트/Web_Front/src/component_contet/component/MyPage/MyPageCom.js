import React from "react";
import { Container } from "../../style/Container_style";
import { Link } from "react-router-dom";
import { InfCom } from "./style/MyPageCom_style";
import defaultImg from "../../../Images/defaultImg.jpg";

const MypageCom = ({ mypage, user, onUpdate, img }) => {
  return (
    <Container>
      <InfCom>
        {!(user === mypage.Account_AC_NickName) && mypage.ME_Scope === 0 ? (
          <div>비공개 페이지입니다.</div>
        ) : (
          <>
            {user === mypage.Account_AC_NickName && (
              <div className="rowReverse">
                <button type="button" className="editButton" onClick={onUpdate}>
                  편집
                </button>
              </div>
            )}
            <div className="flex">
              <div className="leftDiv">
                <h1 className="title">프로필 사진</h1>
                <img
                  className="imgDiv"
                  src={mypage.img ? mypage.img : defaultImg}
                  alt="profile"
                />
              </div>
              <div className="rightDiv">
                <dl>
                  <dt className="contentsTitle">이름</dt>
                  <dd className="contents">{mypage.Account_AC_NickName}</dd>
                </dl>
                <dl>
                  <dt className="contentsTitle">상태</dt>
                  <dd className="contents">{mypage.ME_Certificate}</dd>
                </dl>
                <dl>
                  <dt className="contentsTitle">무게</dt>
                  <dd className="contents">{mypage.ME_Weight}</dd>
                </dl>
                <dl>
                  <dt className="contentsTitle">키</dt>
                  <dd className="contents">{mypage.ME_Height}</dd>
                </dl>
                <dl>
                  <dt className="contentsTitle">생일</dt>
                  <dd className="contents">{mypage.ME_Birth}</dd>
                </dl>
                <dl>
                  <dt className="contentsTitle">성별</dt>
                  <dd className="contents">
                    {mypage.ME_Gender === 1 ? "남자" : "여자"}
                  </dd>
                </dl>
                <div className="buttonDiv">
                  <button type="button" className="buttons">
                    <Link className="buttonLink" to="/Mypage/registerTR">
                      트레이너 등록
                    </Link>
                  </button>

                  <button type="button" className="buttons">
                    <Link className="buttonLink" to="/Mypage/registerBO">
                      운동 건의
                    </Link>
                  </button>
                  <button type="button" className="buttons">
                    <Link
                      className="buttonLink"
                      to={`/Album/${mypage.Account_AC_NickName}`}
                    >
                      앨 범
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </InfCom>
    </Container>
  );
};

export default MypageCom;
