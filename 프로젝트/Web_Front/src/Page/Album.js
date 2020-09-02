import React from "react"
import { Route } from "react-router-dom"
import AlbumList from "../component_contet/component/album/AlbumList"
import AlbumWriteForm from "../containers/album/AlbumWriteForm"
import AlbumEditCom from "../component_contet/component/album/AlbumEditCom"

const Album = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={AlbumList} />
      <Route path={`${match.path}/Write`} component={AlbumWriteForm} />
      <Route path={`${match.path}/Edit`} component={AlbumEditCom} />
    </>
  )
}

export default Album

