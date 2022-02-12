import { useState } from "react";
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
import useAuth from "../../hooks/useAuth";

export default function Header() {
  let totalItensCart = 14;
  //eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  //eslint-disable-next-line
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    text: "",
  });

  const { auth } = useAuth();

  //eslint-disable-next-line
  function handleSearch() { }

  return (
    <Container>
      <UpperBar>
        <img src={Logo} alt="mega-store-logo-png" onClick={() => navigate("/")} />
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
              <ion-icon onClick={() => handleSearch()} name="search-outline"></ion-icon>
            </SearchLogo>
          </form>
        </SearchBar>
        <UserEnvironment to="/login">
          {auth?.name
            ? <span>Olá, {auth.name}</span>
            : <span>Entrar</span>
          }
        </UserEnvironment>
        <Cart to="/cart">
          <ion-icon name="cart-outline"></ion-icon>
          <TotalItensCart>{totalItensCart}</TotalItensCart>
        </Cart>
      </UpperBar>
      <LowerBar>
        <DepartmentLink to="/informatics">Informática</DepartmentLink>
        <DepartmentLink to="/games">Games e PC Gamer</DepartmentLink>
        <DepartmentLink to="/eletro">Eletrodomésticos</DepartmentLink>
        <DepartmentLink to="/cellphones">Celulares</DepartmentLink>
        <DepartmentLink to="/books">Livros</DepartmentLink>
        <DepartmentLink to="/fashion">Moda</DepartmentLink>
        <DepartmentLink to="/home-things">Casa</DepartmentLink>
      </LowerBar>
    </Container>
  );
}
