import React from "react"
import { CommentItemForm } from "./style/CommentItemCom_style"
import { Icon } from "semantic-ui-react"
import ActionButton from "../../../common/Modal/ActionButton"

const CommentItemCom = () => {
  return (
    <>
      <CommentItemForm>
        <div className="contentsForm">
          <h2>내용</h2>
        </div>
        <div className="writerinfoForm">
          <h2 className="writerFrom">작성자</h2>
          <h3 className="dateForm">작성자</h3>
        </div>
        <div className="ratinginfoForm">
          <Icon size="large" name="star" />
          <h2 className="ratingScore">4</h2>
          <ActionButton></ActionButton>
        </div>
      </CommentItemForm>
    </>
  )
}

export default CommentItemCom
