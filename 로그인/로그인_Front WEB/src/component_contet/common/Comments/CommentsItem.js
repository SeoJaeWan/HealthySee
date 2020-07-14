import React, { useState } from "react";
import ActionButton from "../Modal/ActionButton";

const CommentsItem = ({
  comment,
  commentValue,
  nextcomment,
  changeComment,
  onWrite,
  user,
  onDeleteComment,
  onUpdate,
  onReport,
}) => {
  const [edit, setEdit] = useState(false);
  const {
    BC_Content,
    BC_Writer_NickName,
    BC_Re_Ref,
    BC_Code,
    BC_Report_Count,
    BC_State,
  } = comment;

  const ChangeEdit = (code, data) => {
    console.log(edit);
    console.log(code, data);
    onUpdate(edit, code, data);
    setEdit(!edit);
  };
  return (
    <>
      {console.log(edit)}
      {edit ? (
        <div className="CommentChange">
          <input
            className="InputReplyChagne"
            type="text"
            name={BC_Code}
            value={commentValue[BC_Code] ? commentValue[BC_Code] : ""}
            onChange={changeComment}
          />
          <div>
            <ActionButton
              onDelete={onDeleteComment}
              onChange={() => ChangeEdit(BC_Code, BC_Content)}
            />
          </div>
        </div>
      ) : (
        <>
          {BC_State === 0 ? (
            <div className="Reply">
              {BC_Re_Ref !== BC_Code ? (
                <>
                  <div className="SeparateREF">ㄴ</div>
                  <div className="REFContent">{BC_Content}</div>
                </>
              ) : (
                <>
                  <div className="Content">{BC_Content}</div>
                </>
              )}
              <div className="ReplyContent">
                <div className="flex">
                  <div className="CommentWriter">
                    작성자
                    <br /> {BC_Writer_NickName}
                  </div>
                  <div
                    className="CommentWriter"
                    onClick={() =>
                      user !== (comment && BC_Writer_NickName) &&
                      onReport(BC_Code)
                    }
                  >
                    신고 횟수
                    <br />
                    {BC_Report_Count}
                  </div>
                </div>
                {user === (comment && BC_Writer_NickName) && (
                  <>
                    <div className="DeleteButton">
                      <ActionButton
                        onDelete={() => onDeleteComment(BC_Code)}
                        onChange={() => ChangeEdit(BC_Code, BC_Content)}
                      />
                    </div>

                    <hr className="bottomHR" />
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="Blind">
              {BC_State === 1
                ? "블라인드된 댓글입니다. "
                : "삭제된 댓글입니다."}
            </div>
          )}
          {nextcomment !== BC_Re_Ref && (
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
