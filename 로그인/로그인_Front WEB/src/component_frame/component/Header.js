import React from "react";
import { Link } from "react-router-dom";

import { Container, Menu, Title, Login } from "../style/Header_Style.js";

const Header = ({ user }) => {
  return (
    <Container>
      <Menu>메뉴</Menu>
      <Link to="/">
        <Title src={require("../../Images/Header/Title.png")} alt="" />
      </Link>
      <Login>
        {user ? (
          <>
            <Link>{user.username}</Link>/

            <Link>로그아웃</Link>
          </>
        ) : (
          <>
            <Link to="/Login">로그인</Link>/<Link to="/Signup">회원가입</Link>
          </>
        )}
      </Login>
    </Container>
  );
};

export default Header;
