import React, { Component } from "react";
import { Container, Element, Sticky } from "../style/List_style.js";

class List extends Component {
  render() {
    return (
      <Sticky>
        <Container>
          <Element>트레이너,구독자</Element>
        </Container>
      </Sticky>
    );
  }
}

export default List;
