import client from "./client";

export const list = () => client.get("/exercise/list");

export const readPose = (poseName) => client.get(`/exercise/${poseName}`);

export const readReview = ({ poseName, page }) =>
  client.get(`/exercise/review/${poseName}&${page}`);

export const writeExercise = () => client.post("/exercise");

export const writeReview = () => client.post("/exercise/review/");
