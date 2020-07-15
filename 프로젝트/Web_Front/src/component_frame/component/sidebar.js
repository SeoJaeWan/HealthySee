import React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/Board/0">
        자유 게시판
      </a>

      <a className="menu-item" href="/Board/1">
        운동 게시판
      </a>

      <a className="menu-item" href="/MyPage">
        MyPage
      </a>

    </Menu>
  );
};
