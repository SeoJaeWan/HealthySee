import React, { Component } from "react";
import styled from "styled-components";

class Manu extends Component {
  render() {
    return (
      <Container>
        <Element>
          메뉴 영역
        </Element>
      </Container>
    );
  }
}

export default Manu;

const Container = styled.div`
  height: 100vh;
  float:left;
  border-right: 10px solid #d1d8e4;
`

const Element = styled.div`
  width: 250px;
  height: 100vh;
  font-size: 15pt;
`

