import React from "react";
import { Container } from "../../style/Container_style";
import { Link } from "react-router-dom";
import { WriteForm } from "../../style/Mypage/RegisterTRCom_style";

const RegisterTR = ({
  post,
  onChange,
  onClick,
  onUpload,
  deleteFile,
  onCancel,
}) => {
  return (
    <Container>
      <WriteForm>
        <div className="Buttonform">
          <button className="Backbutton" onClick={onCancel}>
            <Link to="/MyPage">뒤로가기</Link>
          </button>
          <button className="Writebutton" onClick={onClick}>
            제출하기
          </button>
        </div>

        <div className="TextTitle">경력</div>
        <div className="TextForm">
          <textarea className="TextArea" type="text" />
        </div>

        <div className="FileForm">
          <div className="FileButton">
            <input type="file" name="file" onChange={onUpload} multiple />
          </div>
          <div className="Filetext">
            <div className="Title">첨부파일</div>
            <div className="StorageFileForm"></div>
          </div>
        </div>
      </WriteForm>
    </Container>
  );
};

export default RegisterTR;
