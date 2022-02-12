import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, SingleProduct, MainPage, Cart } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import { GlobalStyle } from "./style/style";
import CartContext from "./contexts/CartContext";
import { useState } from "react";

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
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </AuthProvider>
  );
}
