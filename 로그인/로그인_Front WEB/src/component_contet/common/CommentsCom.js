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
  onReport,
}) => {
  return (
    <Container>
      <ContentComForm>
        <div className="Comment">
          <label htmlFor="comment">
            댓글
            <br /> {count}
          </label>
          <input
            className=""
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
            const a = comments.slice(index + 1, index + 2);
            const b = a[0];
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
            );
          })}
        </div>
      </ContentComForm>
    </Container>
  );
};

export default CommentsCom;
