import React from "react"
import { Link } from "react-router-dom"
import { Container } from "../../style/Container_style"
import SetItemCom from "./SetItemCom"
import { SetSelectForm } from "./style/SetSelectCom_style"

const SetSelectCom = ({ onClick }) => {
  return (
    <>
      <Container>
        <SetSelectForm>
          <div className="titleForm">
            <h1>세트</h1>
            <input className="searchInput" type="text" name="keyword" />
            <button type="submit" className="searchButton">
              검색
            </button>
            <Link to="/Set/Write">세트 만들기</Link>
          </div>
          <div className="itemForm">
            <SetItemCom onClick={onClick} />
          </div>
        </SetSelectForm>
      </Container>
    </>
  )
}

export default SetSelectCom
