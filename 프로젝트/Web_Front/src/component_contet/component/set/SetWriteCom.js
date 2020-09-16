import React from "react"
import { Icon } from "semantic-ui-react"
import { useHorizontalScroll } from "../../../containers/common/SideScroll"
import IMG from "../../../Images/defaultImg.jpg"
import { Container } from "../../style/Container_style"
import SetPoseItemCom from "./SetPoseItemCom"
import { SetWriteForm } from "./style/SetWriteCom_style"

const SetWriteCom = ({ onClick }) => {
  const a = useHorizontalScroll()
  return (
    <>
      <Container>
        <SetWriteForm>
          <div className="titleFrom">
            <h1>제목</h1>
            <input type="text" className="titleInput"></input>
            <button type="button" className="writeButton" onClick={() => onClick("")}>
              만들기
            </button>
            <button type="button" className="addButton" onClick={() => onClick("Add")}>
              추가하기
            </button>
          </div>
          <div ref={a} className="content">
            <SetPoseItemCom />
          </div>
          <h1 className="setTitle">세트 설명</h1>
          <div className="textForm">
            <textarea className="textArea" type="text" name="BO_Content" />
          </div>
        </SetWriteForm>
      </Container>
    </>
  )
}

export default SetWriteCom
