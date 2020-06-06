import React from "react";
import { Container } from "../../style/BoardCom_Style";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

const BoardCom = ({ match, posts, loading, onClick }) => {
  const fetchMoreData = (posts) => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: <div>다음에 넣어야될값</div>,
      });
    }, 1500);
  };
  if (!posts || loading) {
    return null;
  }

  return (
    <Container>
      <div className="Board">
        <div className="Title">
          게시판
          <div className="Write">
            <Link to={`${match.url}/write`}>글쓰기</Link>
          </div>
        </div>
        <div className="BoardForm">
          <InfiniteScroll
            dataLength={posts.length}
            next={posts.fetchMoreData}
            hasMore={true}
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
