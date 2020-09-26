import React from "react";
import { CommentItemForm } from "./style/CommentItemCom_style";

const CommentItemCom = ({ comment }) => {
  return (
    <>
      <CommentItemForm>
        <div className="contentsForm">
          <h2>{comment.ACO_Content}</h2>
        </div>
        <div className="writerinfoForm">
          <h2 className="writerFrom">{comment.ACO_Writer_NickName}</h2>
          <h3 className="dateForm">{comment.ACO_Creation_Date}</h3>
        </div>
      </CommentItemForm>
    </>
  );
};

export default CommentItemCom;
