import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, SingleProduct } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  const product = {
    name: "Console ps5",
    price: 5000,
    image:
      "https://cdn.dooca.store/1885/products/hno3fswpg81xddwlwtgfk8loffo2fpo8inqo_1600x1600+fill_ffffff.jpg?v=1624107588",
    description: "Essa é a descrição do novíssimo console da Sony.",
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/product"
            element={
              <SingleProduct
                name={product.name}
                price={product.price}
                image={product.image}
                desctiption={product.description}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
