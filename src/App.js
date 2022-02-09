import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, MainPage } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import { GlobalStyle } from "./style/style";


export default function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}