import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;

  width: 968px;

  margin: 50px auto;
  margin-bottom: 80px;

  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);

  gap: 30px;
`;

const ItemsContainer = styled.div`
  width: 100%;

  padding: 30px;

  gap: 30px;
`;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1c285c;
`;

const Title = styled.div`
  width: 100%;

  border-bottom: 1px solid #1976D2;

  h1 {
    font-size: 28px;
    padding: 30px;
  }
`;

const TotalContainer = styled.div`
  width: 100%;

  padding: 30px;

  display: flex;
  justify-content: space-between;
`;

const Total = styled.div`

  .total {
    font-size: 20px;
  }

  p {
    margin: 10px;
    text-align: start;
  }
`;

const Product = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  
  padding: 30px;
  margin-bottom: 30px;

  border: 1px solid #dddddd;
  border-radius: 15px;

  div {
    display: flex;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;

  cursor: pointer;
`;

const RightContainer = styled.div`
  height: 150px;

  padding-left: 20px;

  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  
  cursor: pointer;
`;

const Price = styled.div`
  margin-bottom: 10px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;

  .add,
  .remove {
    cursor: pointer;
    padding-top: 3px;
  }

  .quantity {
    margin: 0 10px;
  }
`;

const RemoveProduct = styled.button`

  display: flex;
  justify-content: center;
  align-self: flex-end;

  padding: 10px 20px;

  border-radius: 4px;

  font-size: 13px;
  font-weight: 300;

  cursor: pointer;

  &:hover {
    color: #FFF;
    background-color: red;

    transition: 0.5s;
  }
`;

const FinishButton = styled.button`
  padding: 0 30px;

  border-radius: 4px;

  font-size: 19px;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    color: #FFF;
    background-color: #1976D2;

    transition: 0.5s;
  }
`;

const FooterContainer = styled.div`
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #eaeaea;
`;

export {
  Container,
  HeaderContainer,
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
  RemoveProduct
};
