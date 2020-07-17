import React, { useState, useEffect } from "react";
import Header from "../../component_frame/component/Header";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/account/user";
import { initializeForm } from "../../modules/account/auth";
import { initialize } from "../../modules/board/boardList";

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

  const ScrollingElement = () => {
    const [scrollY, setScrollY] = useState(0);
  
    function logit() {
      setScrollY(window.pageYOffset);
      console.log(new Date().getTime());
    }
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
    });
  
    return (
      <div className="App">
        <div className="fixed-center">Scroll position: {scrollY}px</div>
      </div>
    );
  };
  return (
    <Header
      ScrollingElement={ScrollingElement}
      user={user}
      onLogout={onLogout}
      isView={isView}
      setMenu={setMenu}
      onClear={onClear}
    />
  );
};

export default HeaderForm;
