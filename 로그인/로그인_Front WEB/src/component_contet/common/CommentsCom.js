import React from "react";
import ActionButton from "./ActionButton";

const CommentsCom = ({
  comments,
  comment,
  user,
  onWrite,
  changeComment,
  onDeleteComment,
}) => {
  const { content, reply } = comment;
  return (
    <div>
      <div>
        <label htmlFor="comment">댓글</label>
        <input
          type="text"
          id="comment"
          name="content"
          value={content}
          onChange={changeComment}
        />
        <button onClick={() => onWrite("0")}>작성</button>
      </div>

      <div>
        {comments.map((comment, index) => {
          const {
            BC_Content,
            BC_Writer_NickName,
            BC_Re_Ref,
            BC_Code,
          } = comment;
          return (
            <div key={index}>
              {BC_Content}
              {BC_Writer_NickName}
              {BC_Re_Ref}

              <input
                type="text"
                name="reply"
                value={reply}
                onChange={changeComment}
              />
              <button onClick={() => onWrite(BC_Re_Ref)}>답글</button>
              {(user && user.username) === (comment && BC_Writer_NickName) && (
                <ActionButton onDelete={() => onDeleteComment(BC_Code)} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsCom;
