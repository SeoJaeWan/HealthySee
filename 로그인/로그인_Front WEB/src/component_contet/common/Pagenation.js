import React from "react";
import styled from "styled-components";
import { Container } from "../style/Container.js";

const Pagenation = ({ page, getPage }) => {
  return (
    <Container>
      {[...Array(page)].map((count, index) => {
        return (
          <Button key={index} onClick={() => getPage(index + 1)}>
            {index + 1}
          </Button>
        );
      })}
    </Container>
  );
};

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 30px;

  color: black;
  background-color: gray;
`;

export default Pagenation;
