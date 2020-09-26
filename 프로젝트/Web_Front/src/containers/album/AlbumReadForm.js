import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import AlbumInfoCom from "../../component_contet/component/album/AlbumInfoCom"
import AlbumList from "../../component_contet/component/album/AlbumList"
import CommentCom from "../../component_contet/component/album/comment/CommentCom"

const AlbumReadForm = ({ match, history }) => {
  console.log("ㅎㅇ")
  return (
    <>
      <AlbumInfoCom match={match} />
      <CommentCom />
    </>
  )
}

export default withRouter(AlbumReadForm)
