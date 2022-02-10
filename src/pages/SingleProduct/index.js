import { Button } from "../../components/Form";
import Header from "../../components/Header";
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

export default function SingleProduct({ name, image, price, desctiption }) {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <Main>
          <ProductImage src={image}></ProductImage>
          <RightContainer>
            <ProductName>{name}</ProductName>
            <ProductPrice>R$ {price}</ProductPrice>
            <Button>Adicionar ao carrinho</Button>
          </RightContainer>
        </Main>
        <Description>
          <h2>Descrição</h2>
          {desctiption}
        </Description>
      </Container>
    </>
  );
}
