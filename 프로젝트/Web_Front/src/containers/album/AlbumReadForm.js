import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import AlbumInfoCom from "../../component_contet/component/album/AlbumInfoCom";
import AlbumList from "../../component_contet/component/album/AlbumList";
import CommentCom from "../../component_contet/component/album/comment/CommentCom";
import {
  getAlbumPicture,
  initialize,
  readAlbum,
} from "../../modules/album/albumList";

const AlbumReadForm = ({ match, history }) => {
  const { picturesCount, picture, comments } = useSelector(({ albumList }) => ({
    picturesCount: albumList.picturesCount,
    picture: albumList.picture,
    comments: albumList.comments,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readAlbum(match.params.code));
    return () => dispatch(initialize());
  }, [match.params.code, dispatch]);

  console.log(picturesCount);
  useEffect(() => {
    if (picture[0] && picture.length !== picturesCount) {
      dispatch(
        getAlbumPicture({
          p_code: picture[picture.length - 1].AP_Code + 1,
          a_code: match.params.code,
        })
      );
    }
  }, [dispatch, match.params.code, picture, picturesCount]);

  return (
    <>
      <AlbumInfoCom match={match} />
      <CommentCom />
    </>
  );
};

export default withRouter(AlbumReadForm);
