import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Container, MenuForm, Sticky } from "../style/Header_Style.js";
import "../style/styles.css";
import Menu from "./Menu.js";

const Header = ({ user, onLogout }) => {

  const [isView, setView] = useState(true);
  const setMenu = () => {
    return setView(!isView);
  };
  return (
    <Sticky>
      <Container>
        <button className="MenuButton" onClick={() => setView(setMenu)}>Menu</button>
        <MenuForm isView={isView}>
          <Menu/>
        </MenuForm>
        <div className="Title">
          <Link to="/">Health&amp;See</Link>
        </div>
        <div className="Login">
          {user ? (
            <div className="block">
              <Link to="/MyPage">
                <div className="user">{user.username}</div>
              </Link>
              &nbsp;&nbsp;
              <div className="logout" onClick={onLogout}>
                Logout
              </div>
            </div>
          ) : (
            <>
              <Link to="/Login">로그인</Link>
            </>
          )}
        </div>
      </Container>
    </Sticky>
  );
};

export default Header;
