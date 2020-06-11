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
    <div>
      {edit ? (
        <input
          type="text"
          name="update"
          value={commentValue.update}
          onChange={changeComment}
        />
      ) : (
        <>
          <p>
            {BC_Content}
            {BC_Writer_NickName}
            {BC_Re_Ref}
          </p>

          <input
            type="text"
            name={BC_Code}
            value={commentValue[BC_Code]}
            onChange={changeComment}
          />
          <button onClick={() => onWrite(BC_Re_Ref, BC_Code)}>답글</button>
        </>
      )}
      {(user && user.username) === (comment && BC_Writer_NickName) && (
        <ActionButton
          onDelete={onDeleteComment}
          onChange={ChangeEdit}
          code={BC_Code}
          data={BC_Content}
        />
      )}
    </div>
  );
};

export default CommentsItem;
