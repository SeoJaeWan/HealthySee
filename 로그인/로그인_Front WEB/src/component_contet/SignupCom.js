import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignupCom = ({ onChange, account, onSubmit }) => {
  return (
    <Container>
      <Title>회원가입</Title>
      <form onSubmit={onSubmit}>
        닉네임
        <input
          type="text"
          name="nickname"
          value={account.nickname}
          onChange={onChange}
        ></input>
        <button>중복 확인</button>
        <br />
        <br />
        몸무게
        <input
          type="text"
          name="weight"
          value={account.weight}
          onChange={onChange}
        />
        <br />
        <br />
        성별 &emsp;&emsp;&emsp;&emsp;&emsp;남
        <CheckBox
          name="gender"
          id="checkbox"
          type="checkbox"
          value={account.gender}
          onChange={onChange}
        />
        <CheckBoxLabel htmlFor="checkbox" />여
        <br />
        <br />
        공개 범위 &emsp;&emsp;&emsp;&emsp;&emsp;On
        <CheckBox
          name="scope"
          id="checkbox2"
          type="checkbox"
          value={account.scope}
          onChange={onChange}
        />
        <CheckBoxLabel htmlFor="checkbox2" />
        OFF
        <br />
        <br />
        <Link to="/Home">
          <button>완료</button>
        </Link>
      </form>
    </Container>
  );
};

export default SignupCom;

const CheckBoxLabel = styled.label`
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: skyblue;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: pink;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
`;

const Select = styled.select`
  width: 250px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Container = styled.div`
  position: absolute;
  margin-left: -170px;
  margin-top: -100px;
  top: 50%;
  left: 50%;
  height: 100vh;
`;
