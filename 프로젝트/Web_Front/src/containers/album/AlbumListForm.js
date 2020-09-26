import React, { useEffect } from "react"

import AlbumList from "../../component_contet/component/album/AlbumList"
import { useSelector, useDispatch } from "react-redux"
import { list, changeField } from "../../modules/album/albumList"
import { RenderImg } from "../common/RenderImg"

const AlbumListForm = ({ match, history }) => {
  const dispatch = useDispatch()
  const { album, img, user } = useSelector(({ albumList, user }) => ({
    album: albumList.album,
    img: albumList.img,
    user: user.user,
  }))

  const onClickEdit = () => {
    history.push(`/Album/a/Edit`)
  }

  const onChange = (e) => {
    console.log(e.target.value)

    dispatch(changeField({ key: "year", value: e.target.value }))
  }

  const onReadAlbum = () => {
    history.push(`/Album/a/Read`)
  }

  useEffect(() => {
    console.log(match.params)
    dispatch(list({ name: match.params.name, year: 2020 }))
  }, [dispatch, match])

  useEffect(() => {
    if (album) {
      album.map((albumData) => {
        let blob = new Blob([Uint8Array.from(albumData.AL_Thumbnail.data).buffer], {
          type: "image/png",
        })
        RenderImg(blob, changeField, dispatch)
      })
    }
  }, [album, dispatch])

  return (
    <>
      {console.log(img.length)}
      <AlbumList
        album={album}
        img={img}
        onChange={onChange}
        onReadAlbum={onReadAlbum}
        onClickEdit={onClickEdit}
        match={match}
        user={user}
        owner={match.params.name === user}
      />
    </>
  )
}

export default AlbumListForm
