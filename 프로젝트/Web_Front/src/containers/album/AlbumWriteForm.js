import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Resizer from "react-image-file-resizer";

import AlbumWrite from "../../component_contet/component/album/AlbumWrite";
import { changeField } from "../../modules/album/albumWrite";
import { RenderImg } from "../common/RenderImg";

const AllowType = ["png", "jpg", "jpeg"];

const AlbumWriteForm = ({ match }) => {
  const dispatch = useDispatch();
  const { field } = useSelector(({ albumWrite }) => ({
    field: albumWrite.field,
  }));
  const onChange = (e) => {
    // 파일의 경우 분기
    if (e.target.type === "file") {
      let files = e.target.files;
      for (var i = 0; i < files.length; i++) {
        let type = files[i].name.split(".").reverse();

        // 이미지 파일일 경우에만 추가
        if (AllowType.indexOf(type[0].toLowerCase()) !== -1) {
          Resizer.imageFileResizer(
            e.target.files[0],
            980,
            980,
            type[0],
            70,
            0,
            (uri) => {
              console.log(uri);
              dispatch(changeField({ key: "photo", value: uri }));
              RenderImg(uri, changeField, dispatch);
            },
            "blob"
          );
        }
        // 아닐 경우 에러 표시
        else console.log("이미지 파일만!");
      }
    } else dispatch(changeField({ key: "content", value: e.target.value }));
  };

  return <AlbumWrite match={match} onChange={onChange} field={field} />;
};

export default withRouter(AlbumWriteForm);
