import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../../style/Mypage/RegisterReadCom_Style";

const RegisterReadCom = ({
  post,
  loading,
  ownPost,
  actionButton,
  onGoBack,
  onClick,
}) => {

  return (
    <Container>
      <div className="TopButton">
        <button className="exit" onClick={onGoBack}>
        <Link to="/Mypage/registerBO">뒤로가기</Link>
        </button>
        <div className="titlebutton">{ownPost && actionButton}</div>
      </div>
      <div className="TitleForm">
        <div className="Title">제목 :</div>
        <div className="TitleContent">제목 들어갈곳</div>
      </div>
      <div className="ContentForm">
        <pre>내용 들어갈곳</pre>
        <div className="FileForm">
          <div className="flex">
            <div className="FileText">첨부파일 :</div>
            <div className="FileButton">
              
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterReadCom;
