import React from "react"
import { Link } from "react-router-dom"
import { Container } from "../../style/Container_style"
import PlanItemCom from "./PlanItemCom"
import { PlanSelectForm } from "./style/PlanSelectCom_style"

const PlanSelectCom = ({ onClick, planList, pose }) => {
  return (
    <>
      <Container>
        <PlanSelectForm>
          <div className="titleForm">
            <h1>세트</h1>
            <form>
              <input className="searchInput" type="text" name="keyword" />
              <button type="submit" className="searchButton">
                검색
              </button>
            </form>
            <Link to="/Plan/Write">세트 만들기</Link>
          </div>
          <div className="itemForm">
            {planList &&
              planList.map((plan, index) => (
                <PlanItemCom key={index} onClick={onClick} plan={plan} pose={pose} />
              ))}
          </div>
        </PlanSelectForm>
      </Container>
    </>
  )
}

export default PlanSelectCom
