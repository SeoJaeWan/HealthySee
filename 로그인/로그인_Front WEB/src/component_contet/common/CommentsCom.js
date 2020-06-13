import React from "react";
import CommentsItem from "./CommentsItem";
import { Container } from "../style/Container.js";
import { ContentComForm } from "./style/CommentsCom_Style.js";

const CommentsCom = ({
  comments,
  commentValue,
  user,
  onWrite,
  changeComment,
  onDeleteComment,
  onUpdate,
  count,
}) => {
  return (
    <Container>
      <ContentComForm>
        <div className="Comment">
          <label htmlFor="comment">댓글 {count}</label>
          <input
            type="text"
            id="comment"
            name="content"
            value={commentValue.content}
            onChange={changeComment}
          />
          <button className="write" onClick={() => onWrite("0")}>
            작성
          </button>
        </div>

        <div>
          {comments.map((comment, index) => {
            return (
              <CommentsItem
                key={index}
                comment={comment}
                commentValue={commentValue}
                changeComment={changeComment}
                onWrite={onWrite}
                user={user}
                onDeleteComment={onDeleteComment}
                onUpdate={onUpdate}
              />
            );
          })}
        </div>
      </ContentComForm>
    </Container>
  );
};

export default CommentsCom;
