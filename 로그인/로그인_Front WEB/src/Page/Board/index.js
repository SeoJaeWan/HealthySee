import React from "react";

import { Route } from "react-router-dom";

import List from "../../component_frame/component/List";
import HeaderForm from "../../containers/Header/HeaderForm";

import ReadPost from "./ReadPost";
import WritePost from "./WritePost";
import BoardPost from "./BoardPost";

const Board = ({ match }) => {
  return (
    <>
      <HeaderForm />
      <List />
      <Route exact path={match.path} component={BoardPost} />
      <Route exact path={`${match.path}/search`} component={BoardPost} />
      <Route path={`${match.path}/write`} component={WritePost} />
      <Route path={`${match.path}/read/:postId`} component={ReadPost} />
    </>
  );
};

export default Board;
