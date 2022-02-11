import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;

  width: 968px;

  margin: 50px auto;
  font-family: "Raleway", sans-serif;

  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 30px;
`;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0333ff;
`;

const Title = styled.div`
  width: 100%;

  h1 {
    font-size: 28px;
    padding: 20px;
  }
`;

const Total = styled.div`
  width: 968px;

  .total {
    font-size: 20px;
  }

  p {
    margin: 10px;
    text-align: end;
  }
`;

const Product = styled.div`
  display: flex;
  border: 1px solid #dddddd;
  border-radius: 15px;
  padding: 30px;
  margin-left: 20px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`;

const RightContainer = styled.div`
  height: 150px;

  padding-left: 20px;
`;

const Name = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
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
  }

  .quantity {
    margin: 0 10px;
  }
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
};
