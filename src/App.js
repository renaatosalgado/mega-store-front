import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, SingleProduct, MainPage } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import { GlobalStyle } from "./style/style";

export default function App() {
  // const product = {
  //   name: "Sofa de muito luxo de couro sintético",
  //   price: 15000,
  //   image:
  //     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzNzn0gpiG4dyxYxP-zHxrLF_LhqT26WDz2ZdcbpZF6KXHtJHhg1ZLKLpmFW2imwYg7foHsaDxHGAdO7QEUiV21vnpPfvFIudmTsj9RTyEsb8EHjQf4SjnSA&usqp=CAE",
  //   description:
  //     "Essa é a descrição do novíssimo console da Sony. Essa é a descrição do novíssimo console da Sony. Essa é a descrição do novíssimo console da Sony. Essa é a descrição do novíssimo console da Sony.",
  // };

  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
