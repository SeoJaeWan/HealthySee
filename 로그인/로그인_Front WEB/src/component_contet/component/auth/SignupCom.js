import React from "react";
import {
  SignupForm,
  CheckBox1,
  CheckBox2,
  CheckBoxLabel,
} from "../../style/SignupCom_Style.js";
import { Container } from "../../style/Container.js";

const SignupCom = ({ onChange, account, onSubmit, error }) => {
  return (
    <Container>
      <SignupForm>
        <h1 className="title">회원가입</h1>
        <form className="signForm" onSubmit={onSubmit}>
          <div className="leftdiv">
            <label className="flex">
              닉&nbsp;네&nbsp;임
              <input
                className="textInput"
                type="text"
                name="nickname"
                value={account.nickname}
                onChange={onChange}
              />
            </label>
            <label className="flex">
              몸&nbsp;무&nbsp;게
              <input
                className="textInput"
                type="text"
                name="weight"
                value={account.weight}
                onChange={onChange}
              />
            </label>
            <label className="flex">
              성&nbsp;&nbsp;&nbsp; 별
              <label className="genderToggle">
                남&nbsp;
                <CheckBox1
                  name="gender"
                  id="checkbox"
                  type="checkbox"
                  value={account.gender}
                  onChange={onChange}
                />
                <CheckBoxLabel htmlFor="checkbox" />
                &nbsp;여
              </label>
            </label>
            <label className="flex">
              공개범위
              <label className="genderToggle">
                On&nbsp;
                <CheckBox2
                  name="scope"
                  id="checkbox2"
                  type="checkbox"
                  value={account.scope}
                  onChange={onChange}
                />
                <CheckBoxLabel htmlFor="checkbox2" />
                &nbsp;OFF
              </label>
            </label>
            <button type="submit" className="completeButton">
              완료
            </button>
          </div>
        </form>
      </SignupForm>
    </Container>
  );
};

export default SignupCom;
