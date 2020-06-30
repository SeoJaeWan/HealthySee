import React from "react";
import { Container } from "../../style/BoardCom_Style";
import { Link } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

const BoardCom = ({
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
  if (!posts || loading) {
    return null;
  }

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
            <input className="SearchInput" type="text" name="keyword" onChange={onChange} />
            <button className="SearchButton" onClick={onSearch}>검색</button>
          </div>
          <div>
            <Link to={`${match.url}/write`}>글쓰기</Link>
          </div>
        </div>
        <div className="BoardForm">
          <div className="flex">
            <div className="BoardTitle">제목</div>
            <div className="BoardWriter">글쓴이</div>
            <div className="BoardDate">작성일</div>
            <div className="BoardHit">조회수</div>
          </div>

          <InfiniteScroll
            className="infinitescroll"
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={scroll}
            loader={<div className="EndBoard">게시글을 불러오고 있습니다.</div>}
            endMessage={<div className="EndBoard">마지막 게시글 입니다.</div>}
          >
            {posts.map((post, index) => {
              return (
                <BoardItem
                  post={post}
                  key={index}
                  onClick={onClick}
                  onChangeModal={onChangeModal}
                />
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </Container>
  );
};

const BoardItem = ({ post, onClick, onChangeModal }) => {
  const {
    BO_Code,
    BO_Title,
    BO_Creation_Date,
    BO_Writer_NickName,
    BO_Hit,
    BO_State,
  } = post;
  return (
    <>
      <div
        className="Item"
        onClick={() => (BO_State === 0 ? onClick(BO_Code) : onChangeModal())}
      >
        <div className="ItemTitle">
          {BO_State === 0 ? BO_Title : "블라인드된 게시글입니다."}
        </div>
        <div className="ItemWriter">{BO_Writer_NickName}</div>
        <div className="ItemDate">
          {new Date(BO_Creation_Date).toLocaleDateString()}
        </div>
        <div className="ItemHit">{BO_Hit}회</div>
      </div>
    </>
  );
};

export default BoardCom;
