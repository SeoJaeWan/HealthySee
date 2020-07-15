import client, { config } from "./client";

export const writeAlbum = (formDate) =>
  client.post("/albums/write", formDate, config);

export const readAlbumList = ({ user, year, remainCount }) =>
  client.get(`/albums/${user}&${year}&${remainCount}`);
