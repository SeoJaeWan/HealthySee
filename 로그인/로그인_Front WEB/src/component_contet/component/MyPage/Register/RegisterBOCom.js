import React from "react";
import { Container } from "../../../style/RegisterBOCom_Style";
import { Link } from "react-router-dom";

const RegisterBO = ({ onClick, onChange, onSearch }) => {
  return (
    <Container>
      <div className="Board">
        <div className="Title">
          운동 건의
          <Link to={`/Mypage/registerBO/write`}>건의하기</Link>
        </div>
        <div className="BoardForm">
          <div className="flex">
            <div className="BoardTitle">제목</div>
            <div className="BoardDate">작성일</div>
            <div className="BoardResult">결과</div>
          </div>
          <BoardItem></BoardItem>
        </div>
      </div>
    </Container>
  );
};

const BoardItem = () => {
  return (
    <>
      <Link to={`/Mypage/registerBO/read`}>
      <div
        className="Item"
      >
        <div className="ItemTitle">
          예시용
        </div>
        <div className="ItemDate">
          2020-07-02
        </div>
        <div className="ItemResult">완료</div>
      </div>
      </Link>
    </>
  );
};


export default RegisterBO;
