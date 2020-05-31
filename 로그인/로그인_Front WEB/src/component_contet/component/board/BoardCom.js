import React from "react";
import { Container } from "../../style/BoardCom_Style";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardCom = ({ match, posts, loading, onClick }) => {
  if (!posts || loading) {
    return null;
  }

  return (
    <Container>
      <Link to={`${match.url}/write`}>글쓰기</Link>

      {posts.map((post, index) => {
        return <BoardItem post={post} key={index} onClick={onClick} />;
      })}
    </Container>
  );
};

const BoardItem = ({ post, onClick }) => {
  const { BO_Code, BO_Title, BO_Creation_Date } = post;
  return (
    <Item onClick={() => onClick(BO_Code)}>
      {BO_Code} {BO_Title} {new Date(BO_Creation_Date).toLocaleDateString()}
    </Item>
  );
};

const Item = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;

  cursor: pointer;
`;

export default BoardCom;
