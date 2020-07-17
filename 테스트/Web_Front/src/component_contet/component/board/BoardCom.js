import React from "react"
import { BoardForm } from "./style/BoardCom_style"

import { Link } from "react-router-dom"

import InfiniteScroll from "react-infinite-scroll-component"
import { Container } from "../../style/Container_style"

const BoardCom = ({
  match,
  posts,
  scroll,
  onClick,
  onChange,
  onSearch,
  fetchMoreData,
  onChangeModal,
}) => {
  return (
    <Container>
      <BoardForm>
        <div className="boardNav">
          <h1 className="title">게시판</h1>
          <form className="searchbox">
            <select name="name" onChange={onChange}>
              <option value="BO_Title">제목</option>
              <option value="BO_Writer_NickName">닉네임</option>
            </select>
            <input className="searchInput" type="text" name="keyword" onChange={onChange} />
            <button type="submit" className="searchButton" onClick={onSearch}>
              검색
            </button>
          </form>
          <button type="button" className="writeButton">
            <Link to={`${match.url}/write`}>글쓰기</Link>
          </button>
        </div>
        <div className="boardForm">
          <InfiniteScroll
            className="infinitescroll"
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={scroll}
            loader={<div className="endBoard">게시글을 불러오고 있습니다.</div>}
            endMessage={<div className="endBoard">마지막 게시글 입니다.</div>}
          >
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
                {posts.map((post, index) => {
                  return (
                    <BoardItem
                      post={post}
                      key={index}
                      onClick={onClick}
                      onChangeModal={onChangeModal}
                    />
                  )
                })}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
      </BoardForm>
    </Container>
  )
}

const BoardItem = ({ post, onClick, onChangeModal }) => {
  const { BO_Code, BO_Title, BO_Creation_Date, BO_Writer_NickName, BO_Hit, BO_State } = post
  return (
    <>
      <tr className="item" onClick={() => (BO_State === 0 ? onClick(BO_Code) : onChangeModal())}>
        <td className="itemTitle">{BO_State === 0 ? BO_Title : "블라인드된 게시글입니다."}</td>
        <td className="itemWriter">{BO_Writer_NickName}</td>
        <td className="itemDate">{new Date(BO_Creation_Date).toLocaleDateString()}</td>
        <td className="itemHit">{BO_Hit}회</td>
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

export default BoardCom
