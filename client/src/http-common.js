import axios from "axios";

export default axios.create({
  baseURL: "https://daria-admin-tools.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});