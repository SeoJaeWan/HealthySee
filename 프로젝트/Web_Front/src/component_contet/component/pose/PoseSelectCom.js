import React from "react"
import { Container } from "../../style/Container_style"
import { PoseSelectForm } from "./style/PoseSelectCom_style"
import PoseItemCom from "./PoseItemCom"

const PoseSelectCom = ({ onClick, poseList }) => {
  return (
    <>
      <Container>
        <PoseSelectForm>
          <div className="TitleForm">
            <h1>운동</h1>
            <form action="">
              <input className="searchInput" type="text" name="keyword" />
              <button type="submit" className="searchButton">
                검색
              </button>
            </form>
          </div>
          <div className="ItemForm">
            {poseList.map((pose, index) => (
              <PoseItemCom pose={pose} onClick={onClick} key={index} />
            ))}
          </div>
        </PoseSelectForm>
      </Container>
    </>
  )
}

export default PoseSelectCom
