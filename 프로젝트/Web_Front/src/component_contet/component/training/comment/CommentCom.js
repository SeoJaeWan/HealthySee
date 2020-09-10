import React from "react"
import { CommentForm, CommentsItemForm } from "./style/CommentCom_style"
import { Container } from "../../../style/Container_style"
import { Icon } from "semantic-ui-react"
import CommentItemCom from "./CommentItemCom"

const CommentCom = ({ grades, onChangeRatingModal }) => {
  return (
    <>
      <Container>
        <CommentForm>
          <input className="textInput" type="text" />
          <button className="writeButton" type="submit">
            작성
          </button>
          <div className="ratingButtonForm">
            <button type="button" onClick={onChangeRatingModal}>
              <Icon size="big" link name="star"></Icon>
            </button>
            <h2>{grades}</h2>
          </div>
        </CommentForm>
        <CommentsItemForm>
          <CommentItemCom />
        </CommentsItemForm>
      </Container>
    </>
  )
}

export default CommentCom
