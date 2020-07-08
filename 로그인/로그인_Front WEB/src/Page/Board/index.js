import React from "react";

import { Route } from "react-router-dom";
import ReadPost from "./ReadPost";
import WritePost from "./WritePost";
import BoardPost from "./BoardPost";
import SelectBoard from "./SelectBoard";

const Board = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={BoardPost} />
      <Route path="/SelectBoard" component={SelectBoard} />
      <Route exact path={`${match.path}/search`} component={BoardPost} />
      <Route path={`${match.path}/write`} component={WritePost} />
      <Route path={`${match.path}/read/:postId`} component={ReadPost} />
    </>
  );
};

export default Board;
