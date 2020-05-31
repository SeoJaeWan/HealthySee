import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, register } from "../../modules/account/auth";
import { check } from "../../modules/account/user";
import SignupCom from "../../component_contet/component/SignupCom";
import { withRouter } from "react-router-dom";

const SignupForm = ({ history }) => {
  const [error, setError] = useState(null);

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
    console.log(sessionStorage.getItem("platforms"));
    const { nickname, weight, gender, scope } = account,
      { name, email, platform } = JSON.parse(
        sessionStorage.getItem("platforms")
      );

    dispatch(
      register({ nickname, gender, weight, scope, name, email, platform })
    );
  };

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError("이미 존재하는 닉네임입니다.");
        return;
      }
      setError("회원가입 실패");
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
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.removeItem("platforms");
      } catch (e) {
        console.log("sessionStorage setItem is not working");
      }
    }
  }, [history, user]);

  return (
    <SignupCom
      onChange={onChange}
      onSubmit={onSubmit}
      account={account}
      error={error}
    />
  );
};

export default withRouter(SignupForm);
