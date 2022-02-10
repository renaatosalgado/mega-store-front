import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Cart,
  Container,
  Logo,
  LowerBar,
  SearchBar,
  SearchLogo,
  UpperBar,
  UserEnvironment,
  TotalItensCart,
  DepartmentLink,
} from "./style";

import { SearchOutline } from "react-ionicons";
import { CartOutline } from "react-ionicons";

export default function Header() {
  let totalItensCart = 14;

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    text: "",
  });

  function handleSearch() {}

  return (
    <Container>
      <UpperBar>
        <Logo to="/">MegaStore</Logo>
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
              <SearchOutline color={"#000"} width="30px" height="30px" />
            </SearchLogo>
          </form>
        </SearchBar>
        <UserEnvironment to="/login">
          <span>Entrar</span>
        </UserEnvironment>
        <Cart to="/cart">
          <CartOutline color={"#00000"} height="30px" width="30px" />
          <TotalItensCart>{totalItensCart}</TotalItensCart>
        </Cart>
      </UpperBar>
      <LowerBar>
        <DepartmentLink to="/">Department</DepartmentLink>
        <DepartmentLink to="/">Department</DepartmentLink>
        <DepartmentLink to="/">Department</DepartmentLink>
        <DepartmentLink to="/">Department</DepartmentLink>
        <DepartmentLink to="/">Department</DepartmentLink>
        <DepartmentLink to="/">Department</DepartmentLink>
        <DepartmentLink to="/">Department</DepartmentLink>
      </LowerBar>
    </Container>
  );
}
