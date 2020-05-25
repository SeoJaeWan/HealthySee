import React, { Component } from "react";
import styled from "styled-components";

class MainCom extends Component {
  render() {
    return (
        <Container>메인페이지라고 합니다..</Container>
    )
  }
}

export default MainCom;

const Container = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
`;