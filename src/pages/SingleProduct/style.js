import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;

  width: 100vw;

  margin: 50px auto;
  font-family: "Raleway", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;
`;

const ProductImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 15px;
  margin-right: 25px;
  object-fit: contain;
`;

const ProductName = styled.h1`
  font-size: 32px;
  line-height: 35px;
  font-weight: 700;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #e4e4e4;
  border-radius: 10px;

  max-width: 400px;
  padding: 20px;
`;

const ProductPrice = styled.p`
  font-size: 32px;
  margin: 30px 40px 60px 30px;
`;

const Description = styled.div`
  word-break: break-word;
  padding: 30px;
  line-height: 30px;

  h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
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
  Main,
  ProductImage,
  ProductName,
  RightContainer,
  ProductPrice,
  Description,
  HeaderContainer,
  FooterContainer,
};
