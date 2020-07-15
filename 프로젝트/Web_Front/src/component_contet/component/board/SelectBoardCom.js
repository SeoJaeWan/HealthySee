import React from "react";
import {
  SelectBoardForm,
  FlexDiv,
} from "../../style/Board/SelectBoardCom_Style";

import { Container } from "../../style/Container";
import { Link } from "react-router-dom";

const SelectBoardCom = ({
  bestPosts,
  match,
  onChangeModal,
  onClick,
  onChange,
}) => {
  const bestFreeList = bestPosts.free;

  return (
    <Container>
      <SelectBoardForm>
        <div className="Board">
          <div className="boardNav">
            <h1>자유 게시판</h1>
            <select name="name" onChange={onChange}>
              <option value="BO_Healthsee_Count">추천수</option>
              <option value="BO_Comment_Count">댓글수</option>
              <option value="BO_Hit">조회수</option>
            </select>
            <button type="button" className="writeButton">
              <Link to={"/Board/0"}>더보기</Link>
            </button>
          </div>
          <div className="BoardForm">
            <table>
              <thead>
                <tr className="flex">
                  <th className="BoardTitle">제목</th>
                  <th className="BoardWriter">글쓴이</th>
                  <th className="BoardDate">작성일</th>
                  <th className="BoardHit">조회수</th>
                </tr>
              </thead>
              <tbody>
                {bestFreeList && bestFreeList.length > 0 ? (
                  bestFreeList.map((post, index) => (
                    <BoardItem
                      post={post}
                      onClick={onClick}
                      onChangeModal={onChangeModal}
                      key={index}
                      type={0}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">게시글이 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </SelectBoardForm>
    </Container>
  );
};

const BoardItem = ({ post, onClick, onChangeModal, type }) => {
  const {
    BO_Code,
    BO_Title,
    BO_Creation_Date,
    BO_Writer_NickName,
    BO_Hit,
    BO_State,
  } = post;

  return (
    <tr
      className="Item"
      onClick={() =>
        BO_State === 0 ? onClick(BO_Code, type) : onChangeModal()
      }
    >
      <td className="ItemTitle">{BO_Title}</td>
      <td className="ItemWriter">{BO_Writer_NickName}</td>
      <td className="ItemDate">
        {new Date(BO_Creation_Date).toLocaleDateString()}
      </td>
      <td className="ItemHit">{BO_Hit}</td>
    </tr>
  );
};

export default SelectBoardCom;
