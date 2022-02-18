# MegaStore

A hole e-commerce application to sell stuff! The client can search for products and buy them as you they wish, or simply save for later.

<p align="center">
  <img src="/public/assets/mega-store.gif" />
</p>

Try it out now at https://mega-store.vercel.app

## About

This is an web application with which lots of people can search for and buy almost anything. Below are the implemented features:

- Sign Up
- Login
- List all products
- List each department
- Add itens to the cart
- Checkout from cart
- See all completed orders

By using this app any user can sell whatever you like to.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled-components%20-%2320232a.svg?&style=for-the-badge&color=b8679e&logo=styled-components&logoColor=%3a3a3a'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-app%20-%2320232a.svg?&style=for-the-badge&color=60ddf9&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react_route%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react-icons%20-%2320232a.svg?&style=for-the-badge&color=f28dc7&logo=react-icons&logoColor=%2361DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/dayjs%20-%2320232a.svg?&style=for-the-badge&color=orange'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/sweetalert2%20-%2320232a.svg?&style=for-the-badge&color=ff69b4'>
</p>

## How to run

1. Clone this repository
2. Clone the back-end repository at https://github.com/renaatosalgado/mega-store-back
3. Follow instructions to run back-end at https://github.com/renaatosalgado/mega-store-back
4. Install dependencies
```bash
npm i
```
5. You must create a root file named ".env" containing the environment variable REACT_APP_API_BASE_URL, that contains the back-end API URL used to make requests
```bash
REACT_APP_API_BASE_URL="http://localhost:5000"
```
6. Run the front-end with
```bash
npm start
```
