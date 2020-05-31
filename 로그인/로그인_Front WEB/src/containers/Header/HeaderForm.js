import React from "react";
import Header from "../../component_frame/component/Header";
import { useSelector } from "react-redux";

const HeaderForm = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  return <Header user={user} />;
};

export default HeaderForm;
