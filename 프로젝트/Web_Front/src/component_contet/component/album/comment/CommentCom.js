import React, { useState } from "react"
import { CommentForm, CommentsItemForm } from "./style/CommentCom_style"
import { Container } from "../../../style/Container_style"
import { Icon } from "semantic-ui-react"
import CommentItemCom from "./CommentItemCom"

const CommentCom = ({ onChangeValue, onWriteReview }) => {
  return (
    <>
      <Container>
        <CommentForm>
          <input className="textInput" type="text" onChange={onChangeValue} />
          <button className="writeButton" type="submit" onClick={onWriteReview}>
            작성
          </button>
        </CommentForm>
        <CommentsItemForm>
          <CommentItemCom />
        </CommentsItemForm>
      </Container>
    </>
  )
}

export default CommentCom
