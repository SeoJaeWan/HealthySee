import React from "react"
import {
  SignupForm,
  CheckBox1,
  CheckBox2,
  CheckBoxLabel,
  Input,
  OnOff,
  Complete,
} from "../../style/SignupCom_Style.js"
import { Container } from "../../style/Container.js"

const SignupCom = ({ onChange, account, onSubmit, error }) => {
  return (
    <Container>
      <SignupForm>
        <h1 className="title">회원가입</h1>
        <div className="signForm">
          <div className="infoForm" onSubmit={onSubmit}>
            <ul>
              <li>닉네임</li>
              <li>몸무게</li>
              <li>성별</li>
              <li>공개범위</li>
            </ul>
            <ul>
              <Input type="text" name="nickname" value={account.nickname} onChange={onChange} />
              <Input type="text" name="weight" value={account.weight} onChange={onChange} />
              <OnOff>남 여</OnOff>
              <CheckBox1
                name="gender"
                id="checkbox"
                type="checkbox"
                value={account.gender}
                onChange={onChange}
              />
              <CheckBoxLabel htmlFor="checkbox" />
              <OnOff>On OFF</OnOff>
              <CheckBox2
                name="scope"
                id="checkbox2"
                type="checkbox"
                value={account.scope}
                onChange={onChange}
              />
              <CheckBoxLabel htmlFor="checkbox2" />
            </ul>
          </div>
          <Complete>완료</Complete>
        </div>
      </SignupForm>
    </Container>
  )
}

export default SignupCom
