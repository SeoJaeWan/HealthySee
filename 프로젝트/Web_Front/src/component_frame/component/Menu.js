import React, { Component } from "react"
import { Link } from "react-router-dom"
import { MenuInfo, BoardList } from "../style/Menu_Style"

const Menu = ({ onClear, user,  boardView, menuBoardView }) => {
  return (
    <MenuInfo>
      <li>
        <button onClick={onClear}>
          <Link className="linkbutton" to="/Board/Select">
            게시판
          </Link>
        </button>
        <button onClick={() => menuBoardView(menuBoardView)} type="button">
          +
        </button>
      </li>
      <BoardList boardView={boardView}>
        <li>
          <button onClick={onClear}>
            <Link className="linkbutton" to="/Board/0">
              자유 게시판
            </Link>
          </button>
        </li>
        <li>
          <button onClick={onClear}>
            <Link className="linkbutton" to="/Board/1">
              운동 게시판
            </Link>
          </button>
        </li>
      </BoardList>

      <li>
        <button onClick={onClear}>
          <Link className="linkbutton" to={`/MyPage/${user}/Home`}>
            MyPage
          </Link>
        </button>
      </li>
    </MenuInfo>
  )
}

export default Menu
