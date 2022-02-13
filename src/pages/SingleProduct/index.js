import { useEffect, useState, useContext } from "react";
import { Button } from "../../components/Form";
import { RemoveCircleOutline, AddCircleOutline } from "react-ionicons";
import Header from "../../components/Header";
import api from "../../services/api";
import {
  Container,
  Main,
  ProductImage,
  ProductName,
  RightContainer,
  ProductPrice,
  Description,
  HeaderContainer,
  MainContainer,
  Quantity,
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { ThreeDots } from "react-loader-spinner";
import ScrollButton from "../../components/ScrollTopButton";
import Footer from "../../components/Footer";
import CartContext from "../../contexts/CartContext";

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);

  const { productId } = useParams();
  const { auth } = useAuth();
  const { cartQuantity, setCartQuantity } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .getSingleProduct(productId)
      .then((res) => {
        setNotFound(false);
        setProduct(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setNotFound(true);
        }
      });
    //eslint-disable-next-line
  }, []);

  function addToCart() {
    if (itemQuantity === 0) {
      Swal.fire({
        icon: "error",
        title: `Não é possível comprar 0 itens!`,
        text: "Por favor, modifique a quantidade.",
      });
      return;
    }

    if (!auth) return navigate("/login");

    setIsLoading(true);

    api
      .postAddToCart({...product, quantity: itemQuantity}, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then(() => {
        setIsLoading(false);
        setCartQuantity(cartQuantity + itemQuantity);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `erro ${err.response.status}`,
          text: "Por favor, repita a operação.",
        });
        setIsLoading(false);
      });
  }

  function addQuantity() {
    setItemQuantity(itemQuantity + 1);
  }

  function removeQuantity() {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  }

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        {notFound ? (
          "Produto não localizado."
        ) : (
          <MainContainer>
            <Main>
              <ProductImage src={product.image}></ProductImage>
              <RightContainer>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>R$ {product.price?.toFixed(2).replace(".", ",")}</ProductPrice>
                <Quantity>
                  <div
                    className="remove"
                    onClick={removeQuantity}
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
                    onClick={addQuantity}
                  >
                    <AddCircleOutline
                      color={"green"}
                      height="20px"
                      title={"Acrescentar"}
                      width="20px"
                    />
                  </div>
                </Quantity>
                <Button onClick={addToCart}>
                  {isLoading ? (
                    <ThreeDots color="#FFFFFF" height={50} width={50} />
                  ) : (
                    "Adicionar ao carrinho"
                  )}
                </Button>
              </RightContainer>
            </Main>
            <Description>
              <h2>Descrição</h2>
              {product.description}
            </Description>
          </MainContainer>
        )}
      </Container>
      <ScrollButton />
      <Footer />
    </>
  );
}
