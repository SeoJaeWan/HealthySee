import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

class Manu extends Component {
  render() {
    return (
      <Container>
        <Element>
          <Link to="/Board"> 게시판</Link>
        </Element>
      </Container>
    );
  }
}

export default Manu;

const Container = styled.div`
  height: 100vh;  
  width: 12%;
  float:left;
  border-right: 10px solid#676A72;
`

const Element = styled.div`
  height: 100vh;
  font-size: 15pt;
`

