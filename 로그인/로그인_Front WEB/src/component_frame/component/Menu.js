import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuInfo } from "../style/Menu_Style";

class Menu extends Component {
  render() {
    return (
      <MenuInfo>
        <div className="Element">
          <a className="menu-item" href="/Board/0">
            자유 게시판
          </a>

          <a className="menu-item" href="/Board/1">
            운동 게시판
          </a>

          <a className="menu-item" href="/MyPage">
            MyPage
          </a>
        </div>
      </MenuInfo>
    );
  }
}

export default Menu;
