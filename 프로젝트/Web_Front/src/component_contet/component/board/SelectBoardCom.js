import React from "react"
import { SelectBoardForm } from "./style/SelectBoardCom_style"

import { Container } from "../../style/Container_style"
import { Link } from "react-router-dom"
import ReactHelmet from "../../../containers/common/ReactHelmet"

const SelectBoardCom = ({ bestPosts, match, onChangeModal, onClick, onChange }) => {
  const bestFreeList = bestPosts.free

  return (
    <>
      <ReactHelmet title={`SelectBoard`} />
      <Container>
        <SelectBoardForm>
          <div className="boardNav">
            <h1>자유 게시판</h1>
            <select name="name" onChange={onChange}>
              <option value="BO_Healthsee_Count">추천수</option>
              <option value="BO_Comment_Count">댓글수</option>
              <option value="BO_Hit">조회수</option>
            </select>
            <button type="button" className="moreButton">
              <Link to={"/Board/0"}>더보기</Link>
            </button>
          </div>
          <div className="boardForm">
            <table className="table">
              <thead>
                <tr>
                  <th className="boardTitle">제목</th>
                  <th className="boardWriter">글쓴이</th>
                  <th className="boardDate">작성일</th>
                  <th className="boardHit">조회수</th>
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
        </SelectBoardForm>
      </Container>
    </>
  )
}

const BoardItem = ({ post, onClick, onChangeModal, type }) => {
  const { BO_Code, BO_Title, BO_Creation_Date, BO_Writer_NickName, BO_Hit, BO_State } = post

  return (
    <>
      <tr
        className="item"
        onClick={() => (BO_State === 0 ? onClick(BO_Code, type) : onChangeModal())}
      >
        <td className="itemTitle">{BO_Title}</td>
        <td className="itemWriter">{BO_Writer_NickName}</td>
        <td className="itemDate">{new Date(BO_Creation_Date).toLocaleDateString()}</td>
        <td className="itemHit">{BO_Hit}</td>
      </tr>
      <tr>
        <td
          colSpan="4"
          className="mobileItem"
          onClick={() => (BO_State === 0 ? onClick(BO_Code) : onChangeModal())}
        >
          {BO_State === 0 ? BO_Title : "블라인드된 게시글입니다."}
          <br />
          {BO_Writer_NickName}&nbsp;&nbsp; {new Date(BO_Creation_Date).toLocaleDateString()}
          &nbsp;&nbsp; 조회수 : {BO_Hit}
        </td>
      </tr>
    </>
  )
}

export default SelectBoardCom
