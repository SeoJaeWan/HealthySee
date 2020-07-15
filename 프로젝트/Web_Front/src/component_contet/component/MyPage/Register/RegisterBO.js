import React from "react";
import { Container } from "../../../style/Mypage/RegisterBO_style";
import { Link } from "react-router-dom";

const RegisterBO = ({ onClick, onChange, onSearch }) => {
  return (
    <Container>
      <div className="Board">
        <div className="Title">
          게시판
          <div className="Searchbox">
            <select name="name" onChange={onChange}>
              <option value="BO_Title">제목</option>
              <option value="BO_Writer_NickName">닉네임</option>
            </select>
            <input type="text" name="keyword" onChange={onChange} />
            <button onClick={onSearch}>검색</button>
          </div>
          <div>글쓰기</div>
        </div>
        <div className="BoardForm">
          <div className="flex">
            <div className="BoardTitle">제목</div>
            <div className="BoardWriter">글쓴이</div>
            <div className="BoardDate">작성일</div>
            <div className="BoardHit">결과</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterBO;
