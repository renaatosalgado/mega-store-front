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
} from "./style";

import { RemoveCircleOutline, AddCircleOutline } from "react-ionicons";
import { useState } from "react";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  let item = 180;
  let orderSum = item * quantity;
  let total = orderSum;

  function addQuantity() {
    setQuantity(quantity + 1);
    console.log(quantity);
  }

  function removeQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    console.log(quantity);
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
        <Product>
          <Image />
          <RightContainer>
            <Name>Nome qualquer</Name>
            <Price>R$ {item}</Price>
            <Quantity>
              <div className="remove" onClick={removeQuantity}>
                <RemoveCircleOutline
                  color={"red"}
                  height="20px"
                  title={"Remover"}
                  width="20px"
                />
              </div>
              <div className="quantity">{quantity}</div>
              <div className="add" onClick={addQuantity}>
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
        <Total>
          <p>Frete único: R$ 25,00</p>
          <p className="total">
            Total com frete ={" "}
            <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
          </p>
        </Total>
      </Container>
    </>
  );
}
