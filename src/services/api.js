import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);

  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

const api = {
  postLogin,
  postSignUp,
};

export default api;
