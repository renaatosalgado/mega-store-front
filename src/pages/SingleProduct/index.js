import { Button } from "../../components/Form";
import {
  Container,
  Main,
  ProductImage,
  ProductName,
  RightContainer,
  ProductPrice,
  Description,
} from "./style";

export default function SingleProduct({ name, image, price, desctiption }) {
  return (
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
  );
}
