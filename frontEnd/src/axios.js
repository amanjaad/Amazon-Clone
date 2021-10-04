import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-2d9cb.cloudfunctions.net/api",
  //baseURL: "http://localhost:5001/clone-2d9cb/us-central1/api", //the api (cloud functions) url
});
export default instance;
