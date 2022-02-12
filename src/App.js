import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, SingleProduct, MainPage, Cart } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import { GlobalStyle } from "./style/style";
import BooksDept from "./pages/Departments/Books";
import CellphoneDept from "./pages/Departments/Cellphones";
import EletroDept from "./pages/Departments/Eletro";
import FashionDept from "./pages/Departments/Fashion";
import GamesDept from "./pages/Departments/Games";
import HomeThingsDept from "./pages/Departments/HomeThings";
import InformaticsDept from "./pages/Departments/Informatics";

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
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/books" element={<BooksDept />} />
          <Route path="/cellphones" element={<CellphoneDept />} />
          <Route path="/eletro" element={<EletroDept />} />
          <Route path="/fashion" element={<FashionDept />} />
          <Route path="/games" element={<GamesDept />} />
          <Route path="/home-things" element={<HomeThingsDept />} />
          <Route path="/informatics" element={<InformaticsDept />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
