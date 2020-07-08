import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuForm, Sticky } from "../style/Header_Style.js";
import "../style/styles.css";
import Menu from "./Menu.js";

const Header = ({ user, onLogout, isView, setMenu, onClear }) => {
  return (
    <Sticky>
      <button
        type="button"
        className="MenuButton"
        onClick={() => setMenu(setMenu)}
      >
        Menu
      </button>
      <MenuForm isView={isView}>
        <Menu onClear={onClear} />
      </MenuForm>
      <h1 className="Title">
        <Link to="/">Health&amp;See</Link>
      </h1>
      <div className="Login">
        {user ? (
          <>
            <button type="button">
              <Link className="user" to="/MyPage">
                {user.username}
              </Link>
            </button>
            <button type="submit" className="logout" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="user" type="button">
            <Link to="/Login">로그인</Link>
          </button>
        )}
      </div>
    </Sticky>
  );
};

export default Header;
