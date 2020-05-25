import React, { Component } from "react";
import styled from "styled-components";


class HomeCom extends Component {
    render() {
      return (
          <Container>홈페이지라고 합니다..</Container>
      )
    }
  }
  
  export default HomeCom;
  
  const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `;