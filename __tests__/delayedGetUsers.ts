import axios from "axios";
import sleep from "./sleep";

export const client = axios.create({ baseURL: `https://reqres.in/api/users` });

client.interceptors.request.use(async (response) => {
  await sleep(3000);
  return response.data;
});
