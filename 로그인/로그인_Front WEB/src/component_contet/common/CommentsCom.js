import React from "react";
import CommentsItem from "./CommentsItem";

const CommentsCom = ({
  comments,
  commentValue,
  user,
  onWrite,
  changeComment,
  onDeleteComment,
  update,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="comment">댓글</label>
        <input
          type="text"
          id="comment"
          name="content"
          value={commentValue.content}
          onChange={changeComment}
        />
        <button onClick={() => onWrite("0")}>작성</button>
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
              update={update}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentsCom;
