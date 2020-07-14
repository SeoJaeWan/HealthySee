import React, { useState } from "react"
import AskModal from "./Modal/AskModal"
import { EvaluationComForm } from "./style/EvaluationCom_Style"

const EvaluationCom = ({ onHealth, onReport, healthseeCount, reportCount, Writer }) => {
  const [modal, setModal] = useState(false)
  const [action, setAction] = useState(null)

  const onActionClick = (action) => {
    console.log(action)
    setModal(true)
    setAction(action)
  }
  const onCancel = () => {
    setModal(false)
  }
  const onConfirm = () => {
    setModal(false)
    action()
  }

  return (
    <>
      <EvaluationComForm>
        <div className="contentForm">
          <h1 className="writer">작성자 : {Writer}</h1>
          <table className="buttonForm">
            <thead>
              <tr>
                <th>
                  <button onClick={() => onActionClick(() => onHealth)}>추천</button>
                </th>
                <th>
                  <button onClick={() => onActionClick(() => onReport)}>신고</button>
                </th>
              </tr>

              <div></div>
            </thead>
            <tbody>
              <tr>
                <th>{healthseeCount}</th>
                <th> {reportCount}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </EvaluationComForm>

      <AskModal
        visible={modal}
        title="추천&amp;신고"
        description="정말 하시겠습니까?"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  )
}

export default EvaluationCom
