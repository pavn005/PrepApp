// This is our API communication setup
// Think of it as our app's postal service - it handles all the sending and receiving of data

import axios from "axios";

const axioInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Our API's address
  timeout: 5000, // We'll wait 5 seconds before giving up
});

// Before sending any mail (requests), attach the user's ID (token)
axioInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axioInstance;