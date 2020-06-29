import React, { useState } from "react";
import ActionButton from "./ActionButton";

const CommentsItem = ({
  comment,
  commentValue,
  nextcomment,
  changeComment,
  onWrite,
  user,
  onDeleteComment,
  onUpdate,
}) => {
  const [edit, setEdit] = useState(false);
  const { BC_Content, BC_Writer_NickName, BC_Re_Ref, BC_Code } = comment;

  const ChangeEdit = (code, data) => {
    console.log(edit);
    console.log(code, data);
    onUpdate(edit, code, data);
    setEdit(!edit);
  };
  console.log(nextcomment, comment.BC_Re_Ref);
  return (
    <>
      {edit ? (
        <div className="flex">
          <input
            className="InputReply"
            type="text"
            name={BC_Code}
            value={commentValue[BC_Code] ? commentValue[BC_Code] : ""}
            onChange={changeComment}
          />
          <ActionButton
            onDelete={onDeleteComment}
            onChange={() => ChangeEdit(BC_Code, BC_Content)}
          />
        </div>
      ) : (
        <>
          <div className="Reply">
            <div className="Content">{BC_Content}</div>
            <div className="ReplyContent">
              <div className="flex">
                <div className="CommentWriter">
                  작성자
                  <br /> {BC_Writer_NickName}
                </div>
                <div className="CommentWriter">
                  댓글번호
                  <br />
                  {BC_Re_Ref}
                </div>
              </div>
              {(user && user.username) === (comment && BC_Writer_NickName) && (
                <div className="DeleteButton">
                  <ActionButton
                    onDelete={() => onDeleteComment(BC_Code)}
                    onChange={() => ChangeEdit(BC_Code, BC_Content)}
                  />
                </div>
              )}
            </div>
          </div>
          {(nextcomment !== BC_Re_Ref) && (
            <div className="Comment">
              <label className="LabelReply" htmlFor="comment">
                답글
              </label>
              <input
                className="InputReply"
                type="text"
                name={BC_Code}
                value={commentValue[BC_Code] ? commentValue[BC_Code] : ""}
                onChange={changeComment}
              />
              <button
                className="writeReply"
                onClick={() => onWrite(BC_Re_Ref, BC_Code)}
              >
                답글
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CommentsItem;
