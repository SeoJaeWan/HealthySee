import React from "react"
import { SignupForm } from "../../style/SignupCom_style.js"
import { Container } from "../../style/Container_style.js"
import ToggleButton from "../../common/ToggleButton.js"
import ReactHelmet from "../../../containers/common/ReactHelmet.js"
import { Icon } from "semantic-ui-react"

const SignupCom = ({ onChange, account, onSubmit, error }) => {
  return (
    <>
      <ReactHelmet title="SignUp" />
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
              <li className="flex">
                <label className="flex">
                  <h2>성&nbsp;&nbsp;&nbsp;별</h2>
                </label>
                <label className="Toggle">
                  <Icon size="large" name="male" />
                  &nbsp;
                  <ToggleButton
                    name="gender"
                    type="checkbox"
                    value={account.gender}
                    onClick={onChange}
                  />
                  <Icon size="large" name="female" />
                </label>
              </li>
              <li className="flex">
                <label className="publicBox">
                  <h2 className="publicTitle">공개범위</h2>
                </label>
                <label className="Toggle">
                  <Icon name="eye" />
                  &nbsp;
                  <ToggleButton
                    name="scope"
                    type="checkbox"
                    value={account.scope}
                    onClick={onChange}
                  />
                  &nbsp;
                  <Icon name="eye slash" />
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
    </>
  )
}

export default SignupCom
