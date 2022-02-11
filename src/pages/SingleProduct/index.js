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
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const [notFound, setNotFound] = useState(false);
  const { productId } = useParams();

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
                <Button>Adicionar ao carrinho</Button>
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
