import React, { useState, useEffect } from "react";
import AlbumWrite from "../../component_contet/component/album/AlbumWrite";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Resizer from "react-image-file-resizer";

const AlbumWriteForm = ({ match }) => {
  const onChange = (e) => {
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
