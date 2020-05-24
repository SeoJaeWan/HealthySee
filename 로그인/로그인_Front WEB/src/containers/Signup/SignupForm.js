import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, register } from "../../modules/auth";
import SignupCom from "../../component_contet/SignupCom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { account } = useSelector(({ auth }) => ({
    account: auth.account,
  }));

  const onChange = (e) => {
    let { value, name } = e.target;

    if (name === "gender" || name === "scope") {
      value = (account[name] - 1) * -1;
    }

    dispatch(changeField({ key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { nickname, weight, gender, scope } = account;
    dispatch(register({ nickname, weight, gender, scope }));
  };

  return (
    <SignupCom onChange={onChange} onSubmit={onSubmit} account={account} />
  );
};

export default SignupForm;
