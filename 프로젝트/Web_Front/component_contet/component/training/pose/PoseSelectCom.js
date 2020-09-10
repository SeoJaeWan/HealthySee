import React from "react"
import { Container } from "../../../style/Container_style"
import { PoseSelectForm } from "./style/PoseSelectCom_style"
import PoseItemCom from "./PoseItemCom"

const PoseSelectCom = ({ onClick, Menu, selected }) => {
  return (
    <>
      <Container>
        <PoseSelectForm>
          <div className="TitleForm">
            <h1>운동</h1>
            <input className="searchInput" type="text" name="keyword" />
            <button type="submit" className="searchButton">
              검색
            </button>
          </div>
          <div className="ItemForm">
            <PoseItemCom Menu={Menu} selected={selected} onClick={onClick} />
          </div>
        </PoseSelectForm>
      </Container>
    </>
  )
}

export default PoseSelectCom
