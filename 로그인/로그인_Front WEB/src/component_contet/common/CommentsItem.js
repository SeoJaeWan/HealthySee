import React, { useState } from "react";
import ActionButton from "./ActionButton";

const CommentsItem = ({
  comment,
  commentValue,
  changeComment,
  onWrite,
  user,
  onDeleteComment,
  update,
}) => {
  const [edit, setEdit] = useState(false);
  const { BC_Content, BC_Writer_NickName, BC_Re_Ref, BC_Code } = comment;

  const ChangeEdit = ({ code, data }) => {
    update({ edit, code, data });
    setEdit(!edit);
  };

  return (
    <>
      {edit ? (
        <div className="flex">
          <input
            className="InputReply"
            type="text"
            name="update"
            value={commentValue.update}
            onChange={changeComment}
          />
          <ActionButton
            onDelete={onDeleteComment}
            onChange={ChangeEdit}
            code={BC_Code}
            data={BC_Content}
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
                    onDelete={onDeleteComment}
                    onChange={ChangeEdit}
                    code={BC_Code}
                    data={BC_Content}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="Comment">
            <label className="LabelReply" htmlFor="comment">
              답글
            </label>
            <input
              className="InputReply"
              type="text"
              name={BC_Code}
              value={commentValue[BC_Code]}
              onChange={changeComment}
            />
            <button
              className="writeReply"
              onClick={() => onWrite(BC_Re_Ref, BC_Code)}
            >
              답글
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CommentsItem;
