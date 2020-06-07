import React from "react";
import ActionButton from "./ActionButton";

const CommentsCom = ({
  comments,
  commentValue,
  user,
  onWrite,
  changeComment,
  onDeleteComment,
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
                name={BC_Code}
                value={commentValue[BC_Code]}
                onChange={changeComment}
              />
              <button onClick={() => onWrite(BC_Re_Ref, BC_Code)}>답글</button>
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
