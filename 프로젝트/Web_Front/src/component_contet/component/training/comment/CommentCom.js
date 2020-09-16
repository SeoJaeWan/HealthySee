import React, { useState } from "react"
import { CommentForm, CommentsItemForm } from "./style/CommentCom_style"
import { Container } from "../../../style/Container_style"
import { Icon } from "semantic-ui-react"
import CommentItemCom from "./CommentItemCom"

const CommentCom = ({
  ratingCount,
  onChangeModal,
  onChangeValue,
  onWriteReview,
  comments,
  write,
  ratingModal,
  user,
}) => {
  return (
    <>
      <Container>
        <CommentForm>
          <input className="textInput" type="text" value={write.content} onChange={onChangeValue} />
          <button className="writeButton" type="submit" onClick={onWriteReview}>
            작성
          </button>
          <div className="ratingButtonForm">
            <button type="button" onClick={() => onChangeModal(!ratingModal)}>
              <Icon size="big" link name="star"></Icon>
            </button>
            <h2>{ratingCount}</h2>
          </div>
        </CommentForm>
        <CommentsItemForm>
          {comments.map((comment, index) => {
            return <CommentItemCom comment={comment} user={user} key={index} />
          })}
        </CommentsItemForm>
      </Container>
    </>
  )
}

export default CommentCom
