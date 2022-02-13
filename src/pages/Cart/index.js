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
  const [isLoading, setIsLoading] = useState(false);

  const { auth } = useAuth();
  //eslint-disable-next-line
  const { cartQuantity, setCartQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  let item = 180;
  let orderSum = item * 4;
  let total = orderSum;

  useEffect(() => {
    if (!auth) return;
    api
      .getItensFromCart({ headers: { Authorization: `Bearer ${auth.token}` } })
      .then((res) => {
        setCartItens(res.data);
      })
      .catch((err) => console.log(err));
    //eslint-disable-next-line
  }, []);

  function addQuantity(productId, productQuantity) {
    console.log(productQuantity);
    //setCartQuantity(cartQuantity + 1);
    let newQuantity = productQuantity;
    newQuantity++;
    console.log(newQuantity);
    api
      .updateItemQuantity(
        { productId, newQuantity },
        { headers: { Authorization: `Bearer ${auth.token}` } }
      )
      .then(
        api
          .getItensFromCart({
            headers: { Authorization: `Bearer ${auth.token}` },
          })
          .then((res) => {
            setCartItens(res.data);
          })
          .catch((err) => console.log(err))
      );
  }

  function removeQuantity(productId, productQuantity) {
    if (productQuantity > 0) {
      //setCartQuantity(cartQuantity - 1);
      let newQuantity = productQuantity;
      newQuantity--;
      api
        .updateItemQuantity(
          { productId, newQuantity },
          { headers: { Authorization: `Bearer ${auth.token}` } }
        )
        .then(
          api
            .getItensFromCart({
              headers: { Authorization: `Bearer ${auth.token}` },
            })
            .then((res) => {
              setCartItens(res.data);
            })
            .catch((err) => console.log(err))
        );
    }
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
                    removeQuantity(product._id, product.quantity);
                  }}
                >
                  <RemoveCircleOutline
                    color={"red"}
                    height="20px"
                    title={"Remover"}
                    width="20px"
                  />
                </div>
                <div className="quantity">{product.quantity}</div>
                <div
                  className="add"
                  onClick={() => {
                    addQuantity(product._id, product.quantity);
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
