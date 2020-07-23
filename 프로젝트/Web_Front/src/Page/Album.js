import React from "react"
import { Route } from "react-router-dom"
import AlbumList from "../component_contet/component/album/AlbumList"
import AlbumWrite from "../component_contet/component/album/AlbumWrite"
import AlbumEditCom from "../component_contet/component/album/AlbumEditCom"

const Album = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={AlbumList} />
      <Route path={`${match.path}/Write`} component={AlbumWrite} />
      <Route path={`${match.path}/Edit`} component={AlbumEditCom} />
    </>
  )
}

export default Album
