import React, { Component } from "react";
import styled from "styled-components";

class List extends Component {
  render() {
    return (
      <Container>
        <Element>트레이너,구독자</Element>
      </Container>
    );
  }
}

export default List;

const Container = styled.div`
  height: 100vh;
  float: right;
  border-left: 10px solid #676A72;
`;

const Element = styled.div`
  width: 250px;
  height: 100vh;
  font-size: 15pt;
`;
