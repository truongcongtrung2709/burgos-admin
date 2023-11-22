import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://burgos-be.onrender.com",
  headers:{
    "Accept":"application/json"
  }
})
export default fetcher;
