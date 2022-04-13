import axios from "axios";

const hotelsApi = axios.create({
  baseURL: "http://localhost:4000/api/v1/",
});

export default hotelsApi;
