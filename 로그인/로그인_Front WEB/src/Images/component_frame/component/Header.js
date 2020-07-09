import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../style/Header_Style.js";
import { Element } from "../style/Manu_Style.js";

const Header = ({ user, onLogout }) => {
  return (
    <Container>
      <button className="menu">메뉴</button>
      <Link to="/">
        <div className="Title">Health&See</div>
      </Link>
      <div className="Login">
        {user ? (
          <>
            <div>{user}</div>

            <div onClick={onLogout}>로그아웃</div>
          </>
        ) : (
          <>
            <Link to="/Login">로그인</Link>
          </>
        )}
      </div>
    </Container>
  );
};

export default Header;
