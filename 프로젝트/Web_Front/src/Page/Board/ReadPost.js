import React from "react";
import ReadForm from "../../containers/board/ReadForm";
import { board } from "./board.json";

const ReadPost = () => {
  return <ReadForm route={board} />;
};

export default ReadPost;
