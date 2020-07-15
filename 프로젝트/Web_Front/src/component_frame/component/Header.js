import React from "react";
import { Link } from "react-router-dom";
import { MenuForm, Sticky } from "../style/Header_style.js";
import Menu from "./Menu.js";

const Header = ({
  user,
  onLogout,
  isView,
  setMenu,
  boardView,
  menuBoardView,
}) => {
  return (
    <Sticky>
      <button
        type="button"
        className="menuButton"
        onClick={() => setMenu(setMenu)}
        onBlur={() => setMenu(setMenu)}
      >
        Menu
      </button>
      <MenuForm isView={isView}>
        <Menu
          user={user}
          isView={isView}
          setMenu={setMenu}
          menuBoardView={menuBoardView}
          boardView={boardView}
        />
      </MenuForm>
      <h1 className="title">
        <Link to="/">Health&amp;See</Link>
      </h1>
      <div className="login">
        {user ? (
          <>
            <button type="button">
              <Link className="user" to={`/MyPage/${user}/Home`}>
                {user}
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
