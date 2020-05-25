import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, register, initializeForm } from "../../modules/auth";
import { check } from "../../modules/user";
import SignupCom from "../../component_contet/component/SignupCom";
import { withRouter } from "react-router-dom";

const SignupForm = ({ history }) => {
  const dispatch = useDispatch();
  const { account, auth, authError, user } = useSelector(({ auth, user }) => ({
    account: auth.account,
    auth: auth.auth,
    authError: auth.authError,

    user: user.user,
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

    dispatch(register({ nickname, gender, weight, scope }));
  };

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        console.log("이미 있는 닉네임입니다!");
        return;
      }
      console.log("회원가입 실패");
      return;
    }

    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage setItem is not working");
      }
    }
  }, [history, user]);

  return (
    <SignupCom onChange={onChange} onSubmit={onSubmit} account={account} />
  );
};

export default withRouter(SignupForm);
