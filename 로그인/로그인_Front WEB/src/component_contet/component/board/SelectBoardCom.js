import React from "react"
import { SelectBoardForm, FlexDiv } from "../../style/Board/SelectBoardCom_Style"

import { Container } from "../../style/Container"
import { Link } from "react-router-dom"

const SelectBoardCom = ({
  match,
  posts,
  loading,
  scroll,
  onClick,
  onChange,
  onSearch,
  fetchMoreData,
  onChangeModal,
}) => {
  return (
    <Container>
      <FlexDiv>
        <SelectBoardForm>
          <div className="Board">
            <div className="boardNav">
              <h1>자유 게시판</h1>

              <button type="button" className="writeButton">
                더보기
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
                  <BoardItem />
                </tbody>
              </table>
            </div>
          </div>
        </SelectBoardForm>
        <SelectBoardForm>
          <div className="Board">
            <div className="boardNav">
              <h1>운동 게시판</h1>

              <button type="button" className="writeButton">
                더보기
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
                  <BoardItem />
                </tbody>
              </table>
            </div>
          </div>
        </SelectBoardForm>
      </FlexDiv>
    </Container>
  )
}

const BoardItem = ({ post, onClick, onChangeModal }) => {
  /*const { BO_Code, BO_Title, BO_Creation_Date, BO_Writer_NickName, BO_Hit, BO_State } = post*/
  return (
    <tr className="Item">
      <td className="ItemTitle">타이틀</td>
      <td className="ItemWriter">작성자</td>
      <td className="ItemDate">작성일</td>
      <td className="ItemHit">몇회</td>
    </tr>
  )
}

export default SelectBoardCom
