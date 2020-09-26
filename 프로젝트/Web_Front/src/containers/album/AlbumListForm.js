import React, { useEffect } from "react";

import AlbumList from "../../component_contet/component/album/AlbumList";
import { useSelector, useDispatch } from "react-redux";
import { list, changeField, initialize } from "../../modules/album/albumList";
import { RenderImg } from "../common/RenderImg";

const AlbumListForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const { album, img, user } = useSelector(({ albumList, user }) => ({
    album: albumList.album,
    img: albumList.img,
    user: user.user,
  }));

  const albumOwner = match.params.name;

  const onClickEdit = () => {
    history.push(`/Album/a/Edit`);
  };

  const onChange = (e) => {
    console.log(e.target.value);

    dispatch(changeField({ key: "year", value: e.target.value }));
  };

  const onReadAlbum = (code) => {
    history.push(`/Album/${albumOwner}/read/${code}`);
  };

  useEffect(() => {
    dispatch(list({ name: albumOwner, year: 2020 }));
    return () => dispatch(initialize());
  }, [dispatch, albumOwner]);

  useEffect(() => {
    if (album) {
      album.map((albumData) => {
        let blob = new Blob(
          [Uint8Array.from(albumData.AL_Thumbnail.data).buffer],
          {
            type: "image/jpg",
          }
        );
        RenderImg(blob, changeField, dispatch);
      });
    }
  }, [album, dispatch]);

  return (
    <>
      <AlbumList
        album={album}
        img={img}
        onChange={onChange}
        onReadAlbum={onReadAlbum}
        onClickEdit={onClickEdit}
        match={match}
        user={albumOwner}
        owner={albumOwner === user}
      />
    </>
  );
};

export default AlbumListForm;
