import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

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

function updateItemQuantity(body, token) {
  const promise = axios.put(`${BASE_URL}/update-quantity`, body, token);
  return promise;
}

function deleteItemFromCart(productId, token) {
  const promise = axios.delete(
    `${BASE_URL}/delete-cart-item/${productId}`,
    token
  );

  return promise;
}

function getCellphones() {
  const promise = axios.get(`${BASE_URL}/cellphones`);

  return promise;
}

function getGames() {
  const promise = axios.get(`${BASE_URL}/games`);

  return promise;
}

function getEletro() {
  const promise = axios.get(`${BASE_URL}/eletro`);

  return promise;
}

function getBooks() {
  const promise = axios.get(`${BASE_URL}/books`);

  return promise;
}

function getFashion() {
  const promise = axios.get(`${BASE_URL}/fashion`);

  return promise;
}

function getHomeThings() {
  const promise = axios.get(`${BASE_URL}/home-things`);

  return promise;
}

function getInformatics() {
  const promise = axios.get(`${BASE_URL}/informatics`);

  return promise;
}

function deleteSession(tokenNumber) {
  const promise = axios.delete(`${BASE_URL}/delete-session/${tokenNumber}`);
  return promise;
}

function postAddOrder(body, token) {
  const promise = axios.post(`${BASE_URL}/add-order`, body, token);
  return promise;
}

function getUserOrders(token) {
  const promise = axios.get(`${BASE_URL}/get-orders`, token);
  return promise;
}

function deleteCart(token) {
  const promise = axios.delete(`${BASE_URL}/delete-cart`, token);
  return promise;
}

const api = {
  postLogin,
  postSignUp,
  getSingleProduct,
  postAddToCart,
  getItensFromCart,
  updateItemQuantity,
  getCellphones,
  getGames,
  getEletro,
  getFashion,
  getBooks,
  getHomeThings,
  getInformatics,
  deleteSession,
  deleteItemFromCart,
  postAddOrder,
  getUserOrders,
  deleteCart,
};

export default api;
