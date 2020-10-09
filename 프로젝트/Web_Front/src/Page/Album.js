import React from "react"
import { Route } from "react-router-dom"

import AlbumWriteForm from "../containers/album/AlbumWriteForm"
import AlbumListForm from "../containers/album/AlbumListForm"
import AlbumReadForm from "../containers/album/AlbumReadForm"
import AlbumEditForm from "../containers/album/AlbumEditForm"

const Album = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={AlbumListForm} />
      <Route path={`${match.path}/Write`} component={AlbumWriteForm} />
      <Route path={`${match.path}/read/:code`} component={AlbumReadForm} />
      <Route path={`${match.path}/Edit/:code`} component={AlbumEditForm} />
    </>
  )
}

export default Album
