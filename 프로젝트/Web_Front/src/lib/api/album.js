import client, { config } from "./client";
import qs from "qs";
export const writeAlbum = (formDate) =>
  client.post("/album/posts", formDate, config);

export const updateAlbum = (formDate, code) =>
  client.patch(`/album/posts/${code}`, formDate);

export const deleteAlbum = (code) => client.delete(`/album/posts/${code}`);

export const readAlbum = (code) => client.get(`/album/posts/${code}`);
export const getAlbumPicture = ({ p_code, a_code }) =>
  client.get(`/album/posts/picture/${p_code}&${a_code}`);

export const readAlbumList = ({ name, year, AL_Code }) => {
  console.log({ name, year, AL_Code });
  const queryString = qs.stringify({
    name,
    year,
    AL_Code,
  });

  console.log(queryString);

  return client.get(`/album/lists?${queryString}`);
};

export const writeComment = ({
  code,
  ACO_Content,
  Album_Account_AC_NickName,
}) =>
  client.post(`/album/comments/${code}`, {
    ACO_Content,
    Album_Account_AC_NickName,
  });
