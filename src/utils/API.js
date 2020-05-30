import axios from "axios";

export default axios.create({
  baseURL: "https://htmlacademy-react-3.appspot.com/six-cities/",
  responseType: "json"
});
