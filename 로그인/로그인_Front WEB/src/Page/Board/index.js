import React from "react";

import { Route } from "react-router-dom";

import Manu from "../../component_frame/component/Manu";
import List from "../../component_frame/component/List";
import HeaderForm from "../../containers/Header/HeaderForm";

import ReadPost from "./ReadPost";
import WritePost from "./WritePost";
import BoardForm from "../../containers/board/BoardForm";

const Board = ({ match }) => {
  return (
    <>
      <HeaderForm />
      <Manu />
      <List />
      <Route exact path={match.path} component={BoardForm} />
      <Route path={`${match.path}/write`} component={WritePost} />
      <Route path={`${match.path}/read/:postId`} component={ReadPost} />
    </>
  );
};

export default Board;
