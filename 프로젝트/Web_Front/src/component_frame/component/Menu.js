import React from "react"
import { Link } from "react-router-dom"
import { MenuInfo } from "../style/Menu_style"

const Menu = ({ onClear, user, onLogout, ScrollingElement }) => {
  return (
    <>
      <MenuInfo>
        <li className="mobileLogin">
          {user ? (
            <>
              <button type="button">
                <Link to={`/MyPage/${user}/Home`}>{user}</Link>
              </button>
              <button type="submit" className="logout" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <button type="button">
              <Link to="/Login">로그인</Link>
            </button>
          )}
        </li>
        <li>
          <button onClick={onClear}>
            <Link className="linkbutton" to="/Board/Select">
              게시판
            </Link>
          </button>
        </li>
        <li>
          <button onClick={onClear}>
            <Link className="linkbutton" to={`/MyPage/${user}/Home`}>
              MyPage
            </Link>
          </button>
        </li>
      </MenuInfo>
    </>
  )
}

export default Menu
