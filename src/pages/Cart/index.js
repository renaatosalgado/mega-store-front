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
  ItemsContainer,
  TotalContainer,
  FinishButton,
  RemoveProduct,
  NoCart,
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
  //const [isLoading, setIsLoading] = useState(false);
  const [hasCart, setHasCart] = useState(false);

  const { auth } = useAuth();
  //eslint-disable-next-line
  const { cartQuantity, setCartQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  let finalPrice;

  useEffect(() => {
    if (!auth) return;
    api
      .getItensFromCart({ headers: { Authorization: `Bearer ${auth.token}` } })
      .then((res) => {
        setCartItens(res.data);
        if (!res.data || res.data.length === 0) {
          return setHasCart(false);
        }
        setHasCart(true);
      })
      .catch((err) => {
        console.log(err);
      });
    calculateTotalPrice();
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
      .then(window.location.reload());
  }

  function removeQuantity(productId, productQuantity) {
    if (productQuantity <= 1) {
      api.deleteItemFromCart(productId, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
    }

    if (productQuantity > 1) {
      //setCartQuantity(cartQuantity - 1);
      let newQuantity = productQuantity;
      newQuantity--;
      api.updateItemQuantity(
        { productId, newQuantity },
        { headers: { Authorization: `Bearer ${auth.token}` } }
      );
    }
    window.location.reload();
  }

  function removeItem(productId) {
    api
      .deleteItemFromCart(productId, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then(window.location.reload());
  }

  function calculateTotalPrice() {
    let totalOrderPrice = 0;

    cartItens.forEach((item) => {
      const totalItemPrice = item.price * item.quantity;
      totalOrderPrice += totalItemPrice;
    });

    finalPrice = (totalOrderPrice + 25).toFixed(2).replace(".", ",");
    return finalPrice;
  }

  function handleFinish() {}

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <Title>
          <h1>Carrinho de compras</h1>
        </Title>
        <ItemsContainer>
          {hasCart ? (
            <>
              {cartItens.map((product, index) => (
                <Product key={index}>
                  <div>
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
                  </div>
                  <RemoveProduct onClick={() => removeItem(product._id)}>
                    Remover item
                  </RemoveProduct>
                </Product>
              ))}
            </>
          ) : (
            <NoCart>
              <p>Seu carrinho ainda está vazio!</p>
            </NoCart>
          )}
        </ItemsContainer>
        {hasCart ? (
          <TotalContainer>
            <Total>
              <p>Frete único: R$ 25,00</p>
              <p className="total">
                Total com frete = <strong>R$ {calculateTotalPrice()}</strong>
              </p>
            </Total>
            <FinishButton onClick={() => handleFinish()}>
              Finalizar Compra
            </FinishButton>
          </TotalContainer>
        ) : (
          ""
        )}
      </Container>
      <ScrollButton />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}
