import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import AlbumInfoCom from "../../component_contet/component/album/AlbumInfoCom"
import AlbumList from "../../component_contet/component/album/AlbumList"
import CommentCom from "../../component_contet/component/album/comment/CommentCom"
import {
  changeField,
  getAlbumPicture,
  initialize,
  readAlbum,
  writeComment,
} from "../../modules/album/albumList"
import { RenderImg } from "../common/RenderImg"

const AlbumReadForm = ({ match }) => {
  const { albumDetail, picturesCount, picture, comments, comment, img } = useSelector(
    ({ albumList }) => ({
      albumDetail: albumList.albumDetail,
      picturesCount: albumList.picturesCount,
      picture: albumList.picture,
      comments: albumList.comments,
      comment: albumList.comment,
      img: albumList.img,
    })
  )

  const dispatch = useDispatch()

  const onChangeComment = (e) => {
    dispatch(changeField({ key: "comment", value: e.target.value }))
  }

  const onWriteReview = () => {
    dispatch(
      writeComment({
        code: match.params.code,
        ACO_Content: comment,
        Album_Account_AC_NickName: albumDetail.Account_AC_NickName,
      })
    )
  }

  useEffect(() => {
    dispatch(readAlbum(match.params.code))
    return () => dispatch(initialize())
  }, [match.params.code, dispatch])

  useEffect(() => {
    if (picture[0] && picture.length !== picturesCount) {
      dispatch(
        getAlbumPicture({
          p_code: picture[picture.length - 1].AP_Code + 1,
          a_code: match.params.code,
        })
      )
    } else if (picture.length === picturesCount) {
      picture.map((picture) => {
        let blob = new Blob([Uint8Array.from(picture.AP_Picture.data).buffer], {
          type: "image/jpg",
        })
        RenderImg(blob, changeField, dispatch)
      })
    }
  }, [dispatch, match.params.code, picture, picturesCount])

  return (
    <>
      {img.length === picturesCount ? (
        <>
          <AlbumInfoCom match={match} imgs={img} albumDetail={albumDetail} />
          <CommentCom
            comments={comments}
            comment={comment}
            onChangeValue={onChangeComment}
            onWriteReview={onWriteReview}
          />
        </>
      ) : (
        <div>loading</div>
      )}
    </>
  )
}

export default withRouter(AlbumReadForm)
