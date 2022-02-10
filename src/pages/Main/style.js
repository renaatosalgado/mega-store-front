import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #0333ff;
`;

const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 130px);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
`;

const SubContainer = styled.div`
  max-width: 968px;

  display: flex;
  flex-direction: column;

  padding: 50px 0;
  gap: 30px;
`;

const Department = styled.div`
  width: 100%;
  height: 320px;

  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);

  flex-wrap: nowrap;
  overflow-x: auto;
  overflow: hidden;

  background-color: #fff;

  scroll-behavior: smooth;
`;

const DepHeader = styled.header`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  line-height: 21px;

  padding-left: 20px;

  border-bottom: 0.5px solid #eaeaea;
`;

const ItemsContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 20px;

  gap: 30px;
`;

const Items = styled.div`
  min-width: 150px;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);

  padding: 15px;

  .image-wraper {
    width: 100%;
    height: 50%;
  }
  .product-image {
    width: 80%;
    height: 80%;

    border-radius: 5px;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .info-wrapper {
    min-width: 100%;
    height: 50%;

    display: flex;
    flex-direction: column;

    span:first-of-type {
      height: 36px;

      font-size: 14px;
      font-weight: 200;

      overflow: hidden;
      text-overflow: ellipsis;

      margin-bottom: 20px;
    }

    span:last-of-type {
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #eaeaea;
`;

export {
  HeaderContainer,
  ItemsContainer,
  Container,
  DepHeader,
  Department,
  Items,
  SubContainer,
  FooterContainer,
};
