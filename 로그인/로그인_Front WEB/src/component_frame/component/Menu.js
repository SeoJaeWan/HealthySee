import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuInfo } from "../style/Menu_Style";

const Menu = ({ onClear, user }) => {
  return (
    <MenuInfo>
      <li>
        <button onClick={onClear}>
          <Link to="/Board/Select">게시판</Link>
        </button>
      </li>
      <li>
        <button onClick={onClear}>
          <Link to="/Board/0">자유 게시판</Link>
        </button>
      </li>
      <li>
        <button onClick={onClear}>
          <Link to="/Board/1">운동 게시판</Link>
        </button>
      </li>

      <li>
        <button onClick={onClear}>
          <Link to={`/MyPage/${user}/Home`}>MyPage</Link>
        </button>
      </li>
    </MenuInfo>
  );
};

export default Menu;
