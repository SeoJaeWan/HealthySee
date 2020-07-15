import axios from "axios";

const client = axios.create();

export const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export default client;
