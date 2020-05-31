import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Title, Login } from "../style/Header_Style.js";

const Header = ({ user, onLogout }) => {
  return (
    <Container>
      <Menu>메뉴</Menu>
      <Link to="/" style={{ textDecoration: 'none' , color:  '#676a72'}}>
        <Title>Health&See</Title>
      </Link>
      <Login>
        {user ? (
          <>
            <Link style={{ textDecoration: 'none', color:  '#676a72'}}>{user.username}</Link>

            <Link onClick={onLogout} style={{ textDecoration: 'none' , color:  '#676a72'}}>로그아웃</Link>
          </>
        ) : (
          <>
            <Link to="/Login" style={{ textDecoration: 'none' , color:  '#676a72'}}>로그인</Link>/<Link to="/Signup" style={{ textDecoration: 'none' , color:  '#676a72'}}>회원가입</Link>
          </>
        )}
      </Login>
    </Container>
  );
};

export default Header;
