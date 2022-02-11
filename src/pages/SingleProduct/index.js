import { useEffect, useState } from "react";
import { Button } from "../../components/Form";
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
} from "./style";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { ThreeDots } from "react-loader-spinner";

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const { productId } = useParams();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
    if (!auth) return navigate("/login");
    setIsLoading(true);

    api
      .postAddToCart(product, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then(() => {
        setIsLoading(false);
        navigate("/cart")
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

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        {notFound ? (
          "Produto não localizado."
        ) : (
          <>
            <Main>
              <ProductImage src={product.image}></ProductImage>
              <RightContainer>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>R$ {product.price}</ProductPrice>
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
          </>
        )}
      </Container>
    </>
  );
}
