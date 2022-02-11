import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function postLogin(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);

  return promise;
}

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}

function getSingleProduct(productId) {
  const promise = axios.get(`${BASE_URL}/products/${productId}`);

  return promise;
}

function postAddToCart(body, token) {
  const promise = axios.post(`${BASE_URL}/add-to-cart`, body, token);
  return promise;
}

function getItensFromCart(token) {
  const promise = axios.get(`${BASE_URL}/get-cart`, token);
  return promise;
}

const api = {
  postLogin,
  postSignUp,
  getSingleProduct,
  postAddToCart,
  getItensFromCart,
};

export default api;
