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

import { SearchOutline } from "react-ionicons";
import { CartOutline } from "react-ionicons";

export default function Header() {
<<<<<<< HEAD
  let totalItensCart = 0;

=======
  let totalItensCart = 14;
  //eslint-disable-next-line
>>>>>>> 2467b263fa74b17f5fb405a83466cbb30f2afee7
  const [isLoading, setIsLoading] = useState(false);
  //eslint-disable-next-line
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    text: "",
  });
<<<<<<< HEAD

  function handleSearch() { }
=======
  //eslint-disable-next-line
  function handleSearch() {}
>>>>>>> 2467b263fa74b17f5fb405a83466cbb30f2afee7

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
              <ion-icon name="search-outline"></ion-icon>
            </SearchLogo>
          </form>
        </SearchBar>
        <UserEnvironment to="/login">
          <span>Entrar</span>
        </UserEnvironment>
        <Cart to="/cart">
          <ion-icon name="cart-outline"></ion-icon>
          <TotalItensCart>{totalItensCart}</TotalItensCart>
        </Cart>
      </UpperBar>
      <LowerBar>
        <DepartmentLink to="/">Informática</DepartmentLink>
        <DepartmentLink to="/">Games e PC Gamer</DepartmentLink>
        <DepartmentLink to="/">Eletrodomésticos</DepartmentLink>
        <DepartmentLink to="/">Celular</DepartmentLink>
        <DepartmentLink to="/">Livros</DepartmentLink>
        <DepartmentLink to="/">Moda</DepartmentLink>
        <DepartmentLink to="/">Casa</DepartmentLink>
      </LowerBar>
    </Container>
  );
}
