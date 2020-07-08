import React, { useState } from "react";
import Header from "../../component_frame/component/Header";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/account/user";
import { initializeForm } from "../../modules/account/auth";
import { initialize } from "../../modules/board/posts";

const HeaderForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const onLogout = () => {
    dispatch(logout());
    dispatch(initializeForm());
  };

  const onClear = () => {
    dispatch(initialize());
  };

  const [isView, setView] = useState(true);
  const setMenu = () => {
    return setView(!isView);
  };
  return (
    <Header
      user={user}
      onLogout={onLogout}
      isView={isView}
      setMenu={setMenu}
      onClear={onClear}
    />
  );
};

export default HeaderForm;
