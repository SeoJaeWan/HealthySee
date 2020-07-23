import React from "react"
import { Link } from "react-router-dom"
import { MenuForm, Sticky, MenuOutside, MenuButton } from "../style/Header_style.js"
import { Icon } from "semantic-ui-react"
import Menu from "./Menu.js"

const Header = ({ user, onLogout, isView, setMenu, scrollY, onChange, onSearch }) => {
  return (
    <>
      <MenuForm scrollY={scrollY} isView={isView}>
        <Menu
          setMenu={setMenu}
          onChange={onChange}
          onSearch={onSearch}
          user={user}
          onLogout={onLogout}
          isView={isView}
          scrollY={scrollY}
        />
      </MenuForm>
      <MenuOutside isView={isView} onClick={() => setMenu(setMenu)} />
      <Sticky>
        <MenuButton type="button" onClick={() => setMenu(setMenu)} scrollY={scrollY}>
          <Icon name="bars" />
        </MenuButton>
        <h1 className="title">
          <Link to="/">Health &amp; See</Link>
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
    </>
  )
}

export default Header
