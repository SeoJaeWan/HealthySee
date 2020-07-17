import React from "react";
import { Container } from "../../../style/Container_style";
import { Link } from "react-router-dom";
import { WriteForm } from "../style/RegisterWriteCom_style";

const RegisterWrite = ({
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
            <Link to="/Mypage/registerBO">뒤로가기</Link>
          </button>
          <button className="Writebutton" onClick={onClick}>
            제출하기
          </button>
        </div>
        <div className="Titleform">
          <div className="Titlediv">
            <div className="Title">제목 :</div>
            <input className="Titleinput" type="text" />
          </div>
        </div>

        <div className="TextTitle">운동 설명</div>
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

export default RegisterWrite;
