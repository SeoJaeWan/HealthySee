import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { changeField } from "../../../modules/training/training"
import PoseSelectCom from "../../../component_contet/component/training/pose/PoseSelectCom"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import defaultImg from "../../../Images/defaultImg.jpg"
import Defaults from "../../../Images/Login/KakaoLogin.png"

const PoseForm = ({ history, match }) => {
  let dispatch = useDispatch()
  const selected = `item1`

  useEffect(() => {
    dispatch(changeField({ key: "logging", value: false }))
  }, [dispatch])

  const onClick = () => {
    history.push(`/Pose/Squat`)
  }

  const list = [
    { num: 1, a: defaultImg },
    { num: 2, a: Defaults },
  ]

  const Menu = () =>
    list.map((list) => {
      return <img className="imgView" src={list.a} key={list.num} alt={""} />
    })

  return (
    <>
      <PoseSelectCom onClick={onClick} Menu={Menu} selected={selected} />
    </>
  )
}

export default withRouter(PoseForm)
