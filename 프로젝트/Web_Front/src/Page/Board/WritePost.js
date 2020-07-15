import React from "react";
import { board } from "./board.json";
import WriteForm from "../../containers/board/WriteForm";
const WritePost = () => {
  return (
    <div>
      <WriteForm route={board} />
    </div>
  );
};

export default WritePost;
