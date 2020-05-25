import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../modules/auth";
import {  Container,  Element,  Shortcut,  Menu,  Title,  Login, ColorA} from "../style/Header_Style.js";

const Header = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(register());
  };

  return (
    <Container>
      <Element>
        <Shortcut>
          <Menu onClick={onClick}>
            메뉴
          </Menu>
          <Title>
            <Link to="/">
              <img src={require("../../Images/Header/Title.png")} alt="" />
            </Link>
          </Title>
          <Login>
            <Link to="/Login"><ColorA>로그인</ColorA></Link>/<Link to="/Signup"><ColorA>회원가입</ColorA></Link>
          </Login>
        </Shortcut>
      </Element>
    </Container>
  );
};

export default Header;
