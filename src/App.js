import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, SingleProduct, MainPage, Cart } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import { GlobalStyle } from "./style/style";
import CartContext from "./contexts/CartContext";
import { useState } from "react";
import BooksDept from "./pages/Departments/Books";
import CellphoneDept from "./pages/Departments/Cellphones";
import EletroDept from "./pages/Departments/Eletro";
import FashionDept from "./pages/Departments/Fashion";
import GamesDept from "./pages/Departments/Games";
import HomeThingsDept from "./pages/Departments/HomeThings";
import InformaticsDept from "./pages/Departments/Informatics";

export default function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <AuthProvider>
      <CartContext.Provider value={{ cartQuantity, setCartQuantity }}>
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
      </CartContext.Provider>
    </AuthProvider>
  );
}
