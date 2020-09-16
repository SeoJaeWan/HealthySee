import React from "react";
import { CommentItemForm } from "./style/CommentItemCom_style";
import { Icon } from "semantic-ui-react";
import ActionButton from "../../../common/Modal/ActionButton";

const CommentItemCom = ({ comment, user }) => {
  const {
    EEV_Content,
    EEV_Rank,
    EEV_Writer_NickName,
    EEV_Creation_Date,
  } = comment;

  return (
    <>
      <CommentItemForm>
        <div className="contentsForm">
          <h2>{EEV_Content}</h2>
        </div>
        <div className="writerinfoForm">
          <h2 className="writerFrom">{EEV_Writer_NickName}</h2>
          <h3 className="dateForm">{EEV_Creation_Date}</h3>
        </div>
        <div className="ratinginfoForm">
          <Icon size="large" name="star" />
          <h2 className="ratingScore">{EEV_Rank}</h2>
          {EEV_Writer_NickName === user && <ActionButton />}
        </div>
      </CommentItemForm>
    </>
  );
};

export default CommentItemCom;
