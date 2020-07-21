import React, { useState, useEffect } from "react"
import Header from "../../component_frame/component/Header"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../modules/account/user"
import { initializeForm } from "../../modules/account/auth"
import { initialize } from "../../modules/board/boardList"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const HeaderForm = ({ history }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }))

  const onLogout = () => {
    dispatch(logout())
    dispatch(initializeForm())
  }

  const onClear = () => {
    dispatch(initialize())
  }

  const [isView, setView] = useState(true)
  const setMenu = () => {
    console.log(isView);
    return setView(!isView)
  }

  const [inputs, setInputs] = useState({
    name: "",
  })
  const { name } = inputs
  const onChange = (e) => {
    const { value } = e.target
    setInputs({
      ...inputs,
      name: value,
    })
  }
  const onSearch = () => {
    history.push(`/MyPage/${name}/Home`)
  }

  const [scrollY, setScrollY] = useState(0)

  function logit() {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  return (
    <Header
      scrollY={scrollY}
      onSearch={onSearch}
      onChange={onChange}
      user={user}
      onLogout={onLogout}
      isView={isView}
      setMenu={setMenu}
      onClear={onClear}
    />
  )
}

export default withRouter(HeaderForm)
