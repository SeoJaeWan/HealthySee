import React, { useState } from "react"
import { ButtonForm } from "./style/ActionButton_style.js"
import AskModal from "./AskModal"

const ActionButton = ({ onChange, onDelete }) => {
  const [modal, setModal] = useState(false)
  const onRemoveClick = () => {
    setModal(true)
  }
  const onCancel = () => {
    setModal(false)
  }
  const onConfirm = () => {
    setModal(false)
    onDelete()
  }

  return (
    <>
      <ButtonForm>
        <button type="button" onClick={onChange}>
          수정
        </button>
        <hr />
        <button type="submit" onClick={onRemoveClick}>
          삭제
        </button>
      </ButtonForm>

      <AskModal visible={modal} title="삭제" onConfirm={onConfirm} onCancel={onCancel} />
    </>
  )
}

export default ActionButton
