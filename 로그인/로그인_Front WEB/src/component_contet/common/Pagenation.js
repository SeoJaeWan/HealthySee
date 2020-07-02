import React from "react";
import styled from "styled-components";
import { Container } from "../style/Container.js";
import { Pagenationform } from "./style/Pagenation_Style.js";

const Pagenation = ({ page, getPage }) => {
  return (
    <Container>
      <Pagenationform>
        <button className="Ltbutton">&lt;</button>
        <div className="pageform">

          {[...Array(page)].map((count, index) => {
            return (
              <Button key={index} onClick={() => getPage(index + 1)}>
                {index + 1}
              </Button>
            );
          })}
        </div>
        <button className="Rtbutton">&gt;</button>
      </Pagenationform>
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
