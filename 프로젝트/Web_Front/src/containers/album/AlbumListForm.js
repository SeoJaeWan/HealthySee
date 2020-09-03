import React, { useEffect } from "react";

import AlbumList from "../../component_contet/component/album/AlbumList";
import { useSelector, useDispatch } from "react-redux";
import { list, changeField } from "../../modules/album/albumList";

const AlbumListForm = ({ match }) => {
  const dispatch = useDispatch();
  const { album, user } = useSelector(({ albumList, user }) => ({
    album: albumList.album,
    user: user.user,
  }));
  const onChange = (e) => {
    console.log(e.target.value);

    dispatch(changeField({ form: "year", data: e.target.value }));
  };

  useEffect(() => {
    console.log(match.params);
    dispatch(list({ name: match.params.name, year: 2020 }));
  }, [dispatch, match]);

  return (
    <AlbumList
      album={album}
      onChange={onChange}
      owner={match.params.name === user}
    />
  );
};

export default AlbumListForm;
