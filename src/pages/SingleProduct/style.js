import styled from "styled-components";

const Container = styled.div`

  min-width: 968px;
  height: calc(100vh - 260px);

  margin: 50px auto;
  font-family: "Raleway", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;

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

const MainContainer = styled.div`
  max-width: 968px;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin: 30px 0;
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
  text-align: left;
  word-break: break-word;
  padding: 60px 0;
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

  position: absolute;
  bottom: 0;
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
  MainContainer
};
