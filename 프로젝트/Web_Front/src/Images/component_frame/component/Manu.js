import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../style/Manu_Style";

class Manu extends Component {
  render() {
    return (
      <Container>
        <div className="Element">
          <Link to="/Board"> 게시판</Link>
        </div>
      </Container>
    );
  }
}

export default Manu;
