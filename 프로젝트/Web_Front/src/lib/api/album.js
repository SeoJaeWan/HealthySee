import client, { config } from "./client";
import qs from "qs";
export const writeAlbum = (formDate) =>
  client.post("/album/posts", formDate, config);

export const updateAlbum = (formDate, code) =>
  client.patch(`/album/posts/${code}`, formDate);

export const deleteAlbum = (code) => client.delete(`/album/posts/${code}`);

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
