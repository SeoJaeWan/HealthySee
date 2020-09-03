import React, { useState, useEffect } from "react";
import AlbumWrite from "../../component_contet/component/album/AlbumWrite";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Resizer from "react-image-file-resizer";

const AlbumWriteForm = ({ match }) => {
  const onChange = (e) => {
    console.log(e.target.value, e.target.type);
    // e.target.type으로 파일 구분해야 할듯
    // e.target.value로 . 단위로 잘라내서 확장자 알아내야 할듯

    // Resizer.imageFileResizer(
    //   e.target.files[0],
    //   2000,
    //   2000,
    //   "JPEG",
    //   70,
    //   0,
    //   (uri) => {
    //     setURL(uri);
    //   },
    //   "base64"
    // );
  };

  return (
    <>
      <AlbumWrite match={match} onChange={onChange} />
    </>
  );
};

export default withRouter(AlbumWriteForm);
