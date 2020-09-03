import React, { useState, useEffect } from "react";
import AlbumWrite from "../../component_contet/component/album/AlbumWrite";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Resizer from "react-image-file-resizer";

const AlbumWriteForm = ({ match }) => {
  const [URL, setURL] = useState("");
  const [URL1, setURL1] = useState("");
  const [URL2, setURL2] = useState("");
  const [URL3, setURL3] = useState("");
  const [URL4, setURL4] = useState("");
  const [URL5, setURL5] = useState("");
  const [URL6, setURL6] = useState("");
  const onChange = (e) => {
    var fileInput = false;
    if (e.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      Resizer.imageFileResizer(
        e.target.files[0],
        2000,
        2000,
        "JPEG",
        70,
        0,
        (uri) => {
          setURL(uri);
        },
        "base64"
      );
      Resizer.imageFileResizer(
        e.target.files[1],
        400,
        500,
        "JPEG",
        50,
        0,
        (uri) => {
          setURL1(uri);
        },
        "base64"
      );
      Resizer.imageFileResizer(
        e.target.files[2],
        500,
        500,
        "JPEG",
        50,
        0,
        (uri) => {
          setURL2(uri);
        },
        "base64"
      );
      Resizer.imageFileResizer(
        e.target.files[3],
        500,
        500,
        "JPEG",
        50,
        0,
        (uri) => {
          setURL3(uri);
        },
        "base64"
      );
      Resizer.imageFileResizer(
        e.target.files[4],
        500,
        500,
        "JPEG",
        50,
        0,
        (uri) => {
          setURL4(uri);
        },
        "base64"
      );
      Resizer.imageFileResizer(
        e.target.files[5],
        500,
        500,
        "JPEG",
        50,
        0,
        (uri) => {
          setURL5(uri);
        },
        "base64"
      );
      Resizer.imageFileResizer(
        e.target.files[6],
        500,
        500,
        "JPEG",
        50,
        0,
        (uri) => {
          setURL6(uri);
        },
        "base64"
      );
    }
  };

  const images = [
    {
      original: URL,
      thumbnail: URL,
    },
    {
      original: URL,
      thumbnail: URL,
    },
    {
      original: URL,
      thumbnail: URL,
    },
    {
      original: URL,
      thumbnail: URL,
    },
  ];

  return (
    <>
      <AlbumWrite match={match} images={images} onChange={onChange} />
    </>
  );
};

export default withRouter(AlbumWriteForm);
