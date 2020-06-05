import React from "react";
import {
  Container,
  Title,
  CheckBox,
  CheckBoxLabel,
  Sign,
  Form,
  Input,
  Frame,
  OnOff,
  Comflit,
} from "../../style/SignupCom_Style.js";

const SignupCom = ({ onChange, account, onSubmit, error }) => {
  return (
    <Container>
      <Title>회원가입</Title>
      <Sign>
        <Form onSubmit={onSubmit}>
          <Frame>
            닉네임
            <Input
              type="text"
              name="nickname"
              value={account.nickname}
              onChange={onChange}
            />
          </Frame>
          <Frame>
            몸무게
            <Input
              type="text"
              name="weight"
              value={account.weight}
              onChange={onChange}
            />
          </Frame>
          <Frame>
            성별 남 여
            <CheckBox
              name="gender"
              id="checkbox"
              type="checkbox"
              value={account.gender}
              onChange={onChange}
            />
            <CheckBoxLabel htmlFor="checkbox" />
          </Frame>
          <Frame>
            공개범위 <OnOff>On OFF</OnOff>
            <CheckBox
              name="scope"
              id="checkbox2"
              type="checkbox"
              value={account.scope}
              onChange={onChange}
            />
            <CheckBoxLabel htmlFor="checkbox2" />
          </Frame>
          <Frame>{error}</Frame>
          <Frame>
            <Comflit>완료</Comflit>
          </Frame>
        </Form>
      </Sign>
    </Container>
  );
};

export default SignupCom;
