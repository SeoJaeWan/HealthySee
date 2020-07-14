import client, { config } from "./client";

export const writeAlbum = (formDate) =>
  client.post("/albums/write", formDate, config);

export const readAlbumList = (user) => client.get(`/albums/${user}&${year}`);

export const readAlbumPost = () => client.get(`/albums/post/${user}&${code}`);
