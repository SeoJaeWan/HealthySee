import React from "react";
import Header from "../../component_frame/component/Header";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/account/user";
import { initializeForm } from "../../modules/account/auth";

const HeaderForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const onLogout = () => {
    dispatch(logout());
    dispatch(initializeForm());
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderForm;
