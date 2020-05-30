import React from "react";
import {
  Container,
  Title,
  CheckBox,
  CheckBoxLabel,
  Sign,
  Form,
} from "../style/SignupCom_Style.js";

const SignupCom = ({ onChange, account, onSubmit, error }) => {
  return (
    <Container>
      <Title>회원가입</Title>
      <Sign>
        <Form onSubmit={onSubmit}>
          닉네임
          <input
            type="text"
            name="nickname"
            value={account.nickname}
            onChange={onChange}
          ></input>
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
          <p>{error}</p>
          <button onClick={onSubmit}>완료</button>
        </Form>
      </Sign>
    </Container>
  );
};

export default SignupCom;
