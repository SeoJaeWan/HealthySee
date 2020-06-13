import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../style/Manu_Style";

class Manu extends Component {
  render() {
    return (
      <Container>
        <div className="Element">
          <Link to="/Board/0"> 자유 게시판</Link>
          <Link to="/Board/1"> 운동 게시판</Link>
        </div>
      </Container>
    );
  }
}

export default Manu;
