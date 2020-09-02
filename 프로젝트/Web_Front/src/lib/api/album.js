import client, { config } from "./client";
import qs from "qs";
export const writeAlbum = (formDate) =>
  client.post("/albums/write", formDate, config);

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
