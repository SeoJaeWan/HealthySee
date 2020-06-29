import React from "react";
import { Link } from "react-router-dom";
import { Container, Sticky } from "../style/Header_Style.js";
import SideBar from "./sidebar";
import "../style/styles.css";

const Header = ({ user, onLogout }) => {
  return (
    <Sticky>
      <Container>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className="Title">
          <Link to="/">Health&amp;See</Link>
        </div>
        <div className="Login">
          {user ? (
            <div className="block">
              <Link to="/MyPage">
                <div className="user">{user.username}</div>
              </Link>{" "}
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
