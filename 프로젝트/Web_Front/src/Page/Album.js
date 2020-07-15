import React from "react";
import { Route } from "react-router-dom";
import AlbumList from "../component_contet/component/album/AlbumList";
import AlbumWrite from "../component_contet/component/album/AlbumWrite";

const Album = ({ match }) => {
  return <Route exact path={match.path} component={AlbumList} />;
};

export default Album;
