import React from "react";
import {
  Container,
  CheckBox1,
  CheckBox2,
  CheckBoxLabel,
  Form,
  Input,
  Frame,
  OnOff,
  Complete,
} from "../../style/SignupCom_Style.js";

const SignupCom = ({ onChange, account, onSubmit, error }) => {
  return (
    <Container>
        <h1 className="Title">회원가입</h1>
        <div className="SignForm">
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
              성별&nbsp;&nbsp; <OnOff>남 여</OnOff>
              <CheckBox1
                name="gender"
                id="checkbox"
                type="checkbox"
                value={account.gender}
                onChange={onChange}
              />
              <CheckBoxLabel htmlFor="checkbox" />
            </Frame>
            <Frame>
              공개범위&nbsp; <OnOff>On OFF</OnOff>
              <CheckBox2
                name="scope"
                id="checkbox2"
                type="checkbox"
                value={account.scope}
                onChange={onChange}
              />
              <CheckBoxLabel htmlFor="checkbox2" />
            </Frame>
            <Frame>
              <Complete>완료</Complete>
            </Frame>
          </Form>
        </div>
    </Container>
  );
};

export default SignupCom;
