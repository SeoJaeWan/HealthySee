import React from "react"
import { CommentItemForm } from "./style/CommentItemCom_style"

const CommentItemCom = ({}) => {
  return (
    <>
      <CommentItemForm>
        <div className="contentsForm">
          <h2>작성내용</h2>
        </div>
        <div className="writerinfoForm">
          <h2 className="writerFrom">작성자명</h2>
          <h3 className="dateForm">작성일</h3>
        </div>
      </CommentItemForm>
    </>
  )
}

export default CommentItemCom
