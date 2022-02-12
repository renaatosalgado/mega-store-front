import Header from "../../components/Header";
import {
  HeaderContainer,
  Container,
  Title,
  Total,
  Product,
  Image,
  RightContainer,
  Name,
  Price,
  Quantity,
  FooterContainer,
} from "./style";

import { RemoveCircleOutline, AddCircleOutline } from "react-ionicons";
import { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import ScrollButton from "../../components/ScrollTopButton";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext";

export default function Cart() {
  const [cartItens, setCartItens] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const { auth } = useAuth();
  //eslint-disable-next-line
  const { cartQuantity, setcartQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  let item = 180;
  let orderSum = item * itemQuantity;
  let total = orderSum;

  useEffect(() => {
    api
      .getItensFromCart({ headers: { Authorization: `Bearer ${auth.token}` } })
      .then((res) => {
        setCartItens(res.data);
        setcartQuantity(res.data.length);
      })
      .catch((err) => console.log(err));
    //eslint-disable-next-line
  }, []);

  function addQuantity(productId) {
    setItemQuantity(itemQuantity + 1);
    console.log(itemQuantity);
  }

  function removeQuantity(productId) {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
    console.log(itemQuantity);
  }

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <Title>
          <h1>Carrinho de compras</h1>
        </Title>
        {cartItens.map((product, index) => (
          <Product key={index}>
            <Image
              src={product.image}
              onClick={() => navigate(`/product/${product._id}`)}
            />
            <RightContainer>
              <Name onClick={() => navigate(`/product/${product._id}`)}>
                {product.name}
              </Name>
              <Price>R$ {product.price}</Price>
              <Quantity>
                <div
                  className="remove"
                  onClick={() => {
                    removeQuantity(product._id);
                  }}
                >
                  <RemoveCircleOutline
                    color={"red"}
                    height="20px"
                    title={"Remover"}
                    width="20px"
                  />
                </div>
                <div className="quantity">{itemQuantity}</div>
                <div
                  className="add"
                  onClick={() => {
                    addQuantity(product._id);
                  }}
                >
                  <AddCircleOutline
                    color={"green"}
                    height="20px"
                    title={"Acrescentar"}
                    width="20px"
                  />
                </div>
              </Quantity>
            </RightContainer>
          </Product>
        ))}
        <Total>
          <p>Frete único: R$ 25,00</p>
          <p className="total">
            Total com frete ={" "}
            <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
          </p>
        </Total>
      </Container>
      <ScrollButton />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}
