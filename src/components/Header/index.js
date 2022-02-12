import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Cart,
  Container,
  LowerBar,
  SearchBar,
  SearchLogo,
  UpperBar,
  UserEnvironment,
  TotalItensCart,
  DepartmentLink,
} from "./style";

import Logo from "../../assets/img/mega-store-logo-blank.png";
import CartContext from "../../contexts/CartContext";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { setCartQuantity, cartQuantity } = useContext(CartContext);
  //eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    text: "",
  });
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth) return;
    api
      .getItensFromCart({ headers: { Authorization: `Bearer ${auth.token}` } })
      .then((res) => {
        setCartQuantity(res.data.length);
      });
  }, []);
  //eslint-disable-next-line
  function handleSearch() {}

  return (
    <Container>
      <UpperBar>
        <img
          src={Logo}
          alt="mega-store-logo-png"
          onClick={() => navigate("/")}
        />
        <SearchBar>
          <form>
            <Input
              type="text"
              placeholder="O que você está buscando?"
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              value={search.text}
              disabled={isLoading}
              required
            />
            <SearchLogo type="submit">
              <ion-icon name="search-outline"></ion-icon>
            </SearchLogo>
          </form>
        </SearchBar>
        <UserEnvironment to="/login">
          <span>Entrar</span>
        </UserEnvironment>
        <Cart to="/cart">
          <ion-icon name="cart-outline"></ion-icon>
          <TotalItensCart>{cartQuantity}</TotalItensCart>
        </Cart>
      </UpperBar>
      <LowerBar>
        <DepartmentLink to="/">Informática</DepartmentLink>
        <DepartmentLink to="/">Games e PC Gamer</DepartmentLink>
        <DepartmentLink to="/">Eletrodomésticos</DepartmentLink>
        <DepartmentLink to="/">Celulares</DepartmentLink>
        <DepartmentLink to="/">Livros</DepartmentLink>
        <DepartmentLink to="/">Moda</DepartmentLink>
        <DepartmentLink to="/">Casa</DepartmentLink>
      </LowerBar>
    </Container>
  );
}
