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


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (!auth) return;
    api
      .getItensFromCart({ headers: { Authorization: `Bearer ${auth.token}` } })
      .then((res) => {
        setCartQuantity(res.data.length);
      });
    //eslint-disable-next-line
  }, []);

  function logout() {
    api.deleteSession(auth.token).then(() => {
      localStorage.removeItem("auth");
      setAuth(null);
      navigate("/");
    });
  }

  //eslint-disable-next-line
  function handleSearch() { }
  //eslint-disable-next-line
  function handleLogout() {
    logout();
    navigate("/");
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
    typography: {
      button: {
        fontSize: 16,
        fontWeight: 400,
      }
    }
  });

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
              <ion-icon
                onClick={() => handleSearch()}
                name="search-outline"
              ></ion-icon>
            </SearchLogo>
          </form>
        </SearchBar>
        <UserEnvironment>
          {auth?.name
            ?
            <ThemeProvider theme={theme}>
              <div>
                <Button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  Olá, {auth.name}
                </Button>


                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={handleClose}>Meus pedidos</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </ThemeProvider>
            :
            <Button onClick={() => navigate('/login')} variant="contained">Entrar</Button>
          }
        </UserEnvironment>
        <Cart to="/cart">
          <div><ion-icon name="cart-outline"></ion-icon></div>
          <TotalItensCart>{cartQuantity}</TotalItensCart>
        </Cart>
      </UpperBar>
      <LowerBar>
        <DepartmentLink to="/informatics">INFORMÁTICA</DepartmentLink>
        <DepartmentLink to="/games">GAMES E PC GAMER</DepartmentLink>
        <DepartmentLink to="/eletro">ELETRODOMÉSTICOS</DepartmentLink>
        <DepartmentLink to="/cellphones">CELULARES</DepartmentLink>
        <DepartmentLink to="/books">LIVROS</DepartmentLink>
        <DepartmentLink to="/fashion">MODA</DepartmentLink>
        <DepartmentLink to="/home-things">CASA</DepartmentLink>
      </LowerBar>
    </Container>
  );
}
