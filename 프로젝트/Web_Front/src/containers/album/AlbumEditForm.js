import React, { useEffect, useState } from "react"

import AlbumList from "../../component_contet/component/album/AlbumList"
import { useSelector, useDispatch } from "react-redux"
import {
  changeField,
  getAlbumPicture,
  initialize,
  readAlbum,
  writeComment,
} from "../../modules/album/albumList"
import AlbumEditCom from "../../component_contet/component/album/AlbumEditCom"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { RenderImg } from "../common/RenderImg"
import Resizer from "react-image-file-resizer"

const AllowType = ["png", "jpg", "jpeg"]

const AlbumEditForm = ({ match, history }) => {
  //엘범 편집의 경우 쓰기의 폼에서 파일을 추가 삭제할수 있는 기능만 더할 생각
  const { field, user } = useSelector(({ albumWrite, user }) => ({
    field: albumWrite.field,
    user: user.user,
  }))

  const dispatch = useDispatch()

  const [profileIMG, setProfileIMG] = useState()

  //X눌렀을때 파일 삭제
  const onDelete = () => {}

  const onChange = (e) => {
    // 파일의 경우 분기
    if (e.target.type === "file") {
      let files = e.target.files
      for (var i = 0; i < files.length; i++) {
        let type = files[i].name.split(".").reverse()

        // 이미지 파일일 경우에만 추가
        if (AllowType.indexOf(type[0].toLowerCase()) !== -1) {
          Resizer.imageFileResizer(
            e.target.files[i],
            980,
            980,
            type[0],
            70,
            0,
            (uri) => {
              console.log(uri)
              dispatch(changeField({ key: "photo", value: uri }))
              RenderImg(uri, changeField, dispatch)
            },
            "blob"
          )
        }
        // 맨마지막 하나 만들기
        if (AllowType.indexOf(type[0].toLowerCase()) !== -1 && e.target.files[0]) {
          Resizer.imageFileResizer(
            e.target.files[0],
            150,
            150,
            type[0],
            70,
            0,
            (uri) => {
              setProfileIMG(uri)
            },
            "blob"
          )
        }
        // 아닐 경우 에러 표시
        else console.log("이미지 파일만!")
      }
    } else dispatch(changeField({ key: "content", value: e.target.value }))
  }

  return (
    <>
      <AlbumEditCom match={match} field={field} onChange={onChange} />
    </>
  )
}

export default withRouter(AlbumEditForm)
