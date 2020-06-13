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
}) => {
  if (!posts || loading) {
    return null;
  }

  return (
    <Container>
      {console.log(posts.length)}
      <div className="Board">
        <div className="Title">
          게시판
          <div>
            <select name="name" onChange={onChange}>
              <option value="BO_Title">제목</option>
              <option value="BO_Writer_NickName">닉네임</option>
            </select>
            <input type="text" name="keyword" onChange={onChange} />
            <button onClick={onSearch}>검색</button>
          </div>
          <div>
            <Link to={`${match.url}/write`}>글쓰기</Link>
          </div>
        </div>
        <div className="BoardForm">
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={scroll}
            loader={<h4>Loading...</h4>}
          >
            {posts.map((post, index) => {
              return <BoardItem post={post} key={index} onClick={onClick} />;
            })}
          </InfiniteScroll>
        </div>
      </div>
    </Container>
  );
};

const BoardItem = ({ post, onClick }) => {
  const { BO_Code, BO_Title, BO_Creation_Date } = post;
  return (
    <div className="Item" onClick={() => onClick(BO_Code)}>
      {BO_Code} {BO_Title} {new Date(BO_Creation_Date).toLocaleDateString()}
    </div>
  );
};

export default BoardCom;
