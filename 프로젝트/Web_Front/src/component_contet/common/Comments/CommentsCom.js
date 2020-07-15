import React from "react"
import CommentsItem from "./CommentsItem"
import { Container } from "../../style/Container_style.js"
import { ContentComForm } from "./style/CommentsCom_style.js"

const CommentsCom = ({
  comments,
  commentValue,
  user,
  onWrite,
  changeComment,
  onDeleteComment,
  onUpdate,
  count,
  onReport,
}) => {
  return (
    <Container>
      <ContentComForm>
        <div className="comment">
          <h5>
            댓글
            <br /> {count}
          </h5>
          <input
            type="text"
            id="comment"
            name="content"
            className="commentInput"
            value={commentValue.content}
            onChange={changeComment}
          />
          <button type="submit" className="writeButton" onClick={() => onWrite("0")}>
            작성
          </button>
        </div>
          {comments.map((comment, index) => {
            const a = comments.slice(index + 1, index + 2)
            const b = a[0]
            return (
              <CommentsItem
                key={index}
                comment={comment}
                nextcomment={b ? b.BC_Re_Ref : ""}
                nextcomment2={b ? b.BC_Code : ""}
                commentValue={commentValue}
                changeComment={changeComment}
                onWrite={onWrite}
                user={user}
                onDeleteComment={onDeleteComment}
                onUpdate={onUpdate}
                onReport={onReport}
              />
            )
          })}
      </ContentComForm>
    </Container>
  )
}

export default CommentsCom
