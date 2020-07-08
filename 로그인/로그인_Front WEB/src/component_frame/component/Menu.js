import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuInfo } from "../style/Menu_Style";

class Menu extends Component {
  render() {
    return (
      <MenuInfo>
        <li>
          <Link to="/Board/0">자유 게시판</Link>
        </li>
        <li>
          <Link to="/Board/1">운동 게시판</Link>
        </li>

        <li>
          <Link to="/MyPage">MyPage</Link>
        </li>
      </MenuInfo>
    );
  }
}

export default Menu;
