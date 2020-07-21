import React from "react"
import { Link } from "react-router-dom"
import { MenuInfo, UserButton } from "../style/Menu_style"

const Menu = ({ onClear, user, onLogout, scrollY, onChange, onSearch, setMenu }) => {
  return (
    <MenuInfo scrollY={scrollY}>
      <UserButton scrollY={scrollY}>
        {user ? (
          <>
            <div className="userBox">
              <dl>
                <dt>이름 :</dt>
                <dd className="userForm">
                  <button type="" className="userButton">
                    <Link to={`/MyPage/${user}/Home`}>{user}</Link>
                  </button>
                </dd>
              </dl>
              <button type="submit" className="logoutButton" onClick={onLogout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <button type="button" onClick={() => setMenu(setMenu)}>
            <Link to="/Login">로그인</Link>
          </button>
        )}
      </UserButton>
      <li className="saerchList">
        <form>
          <input type="text" onChange={onChange} />
          <button type="submit" className="searchButton" onClick={onSearch}>
            검색
          </button>
        </form>
      </li>
      <li>
        <button type="submit" onClick={(onClear, () => setMenu(setMenu))}>
          <Link className="linkbutton" to="/Board/Select">
            게시판
          </Link>
        </button>
      </li>
      <li>
        <button type="submit" onClick={(onClear, () => setMenu(setMenu))}>
          <Link className="linkbutton" to={`/MyPage/${user}/Home`}>
            MyPage
          </Link>
        </button>
      </li>
    </MenuInfo>
  )
}

export default Menu
