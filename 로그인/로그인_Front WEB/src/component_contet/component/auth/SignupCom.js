import React from "react";
import { SignupForm } from "../../style/SignupCom_Style.js";
import { Container } from "../../style/Container.js";
import ToggleButton from "../../common/ToggleButton.js";

const SignupCom = ({ onChange, account, onSubmit, error }) => {
  return (
    <Container>
      <SignupForm>
        <h1 className="title">회원가입</h1>
        <form className="signForm" onSubmit={onSubmit}>
          <ul className="leftdiv">
            <li>
              <label htmlFor="nickName">닉 네 임</label>
              <input
                id="nickName"
                className="textInput"
                type="text"
                name="nickname"
                value={account.nickname}
                onChange={onChange}
              />
            </li>
            <li>
              <label className="weight">몸 무 게</label>
              <input
                id="weight"
                className="textInput"
                type="text"
                name="weight"
                value={account.weight}
                onChange={onChange}
              />
            </li>
            <li>
              <label className="flex">
                성&nbsp;&nbsp;&nbsp;별
                <label className="genderToggle">
                  남&nbsp;
                  <ToggleButton
                    name="gender"
                    type="checkbox"
                    value={account.gender}
                    onClick={onChange}
                  />
                  &nbsp;여
                </label>
              </label>
            </li>
            <li>
              <label className="flex">
                공개범위
                <label className="publicToggle">
                  On&nbsp;
                  <ToggleButton
                    name="scope"
                    type="checkbox"
                    value={account.scope}
                    onClick={onChange}
                  />
                  &nbsp;OFF
                </label>
              </label>
            </li>
            <p>{error}</p>
            <button type="submit" className="completeButton">
              완료
            </button>
          </ul>
        </form>
      </SignupForm>
    </Container>
  );
};

export default SignupCom;
