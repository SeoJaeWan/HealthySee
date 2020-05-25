import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Element,
  Shortcut,
  Menu,
  Title,
  Login,
} from "../style/Header_Style.js";

const Header = () => {
  return (
    <Container>
      <Element>
        <Shortcut>
          <Menu>메뉴</Menu>
          <Title>
            <Link to="/">
              <img src={require("../../Images/Header/Title.png")} alt="" />
            </Link>
          </Title>
          <Login>
            <Link to="/Login">로그인</Link>

            <Link to="/Signup">회원가입</Link>
          </Login>
        </Shortcut>
      </Element>
    </Container>
  );
};

export default Header;
