import React from "react";
import { Route } from "react-router-dom";

import AlbumWriteForm from "../containers/album/AlbumWriteForm";
import AlbumEditCom from "../component_contet/component/album/AlbumEditCom";
import AlbumListForm from "../containers/album/AlbumListForm";
import AlbumReadForm from "../containers/album/AlbumReadForm";

const Album = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={AlbumListForm} />
      <Route path={`${match.path}/Write`} component={AlbumWriteForm} />
      <Route path={`${match.path}/read/:code`} component={AlbumReadForm} />
      <Route path={`${match.path}/:user/Edit`} component={AlbumEditCom} />
    </>
  );
};

export default Album;
