import React, { Component } from "react";
import styled from "styled-components";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../modules/auth";

const Header = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(register());
  };

  return (
    <Container>
      <Element>
        <Shortcut>
          <Manu>
            <button onClick={onClick}>메뉴</button>
          </Manu>
          <Title>
            <Link to="/">
              <button>Health & See</button>
            </Link>
          </Title>
          <Login>
            <Link to="/Login">
              <button>로그인</button>
            </Link>
            /
            <Link to="/Signup">
              <button>회원가입</button>
            </Link>
          </Login>
        </Shortcut>
      </Element>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  border-bottom: 10px solid #d1d8e4;
`;
const Element = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 50px;
  font-size: 15pt;
  display: flex;
  flex-flow: row wrap;
`;

const Shortcut = styled.div`
  order: 1;
  width: 100%;
  height: 30px;
  margin-top: 10px;
`;
const Manu = styled.div`
  position: absolute;
  left: 10px;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
`;

const Login = styled.div`
  position: absolute;
  right: 10px;
`;
