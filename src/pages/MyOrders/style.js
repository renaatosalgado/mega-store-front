import styled from "styled-components";

const InfoContainer = styled.div`
  min-width: 60%;

  display: flex;
  flex-direction: column;

  padding: 20px;
  margin: 20px;

  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.12);

  & > span {
    text-align: center;

    font-size: 26px;
    font-weight: 600;

    padding-bottom: 20px;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5px;
  padding: 30px;
  gap: 15px;

  border: 1px solid #000;

  background-color: white;

  & div:first-of-type > span {
    font-size: 16px;
    font-weight: 600;
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > div:last-of-type {
    align-items: flex-end;
  }
`;

const TotalContainer = styled.div`
  width: 100%;

  padding-top: 15px;

  display: flex;
  justify-content: space-between;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;

    text-align: left;

    & > span:first-of-type {
      font-size: 14px;
      font-weight: 400;

      padding-bottom: 10px;
    }

    & > span:last-of-type {
      font-size: 20px;
      font-weight: 700;
    }
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;

    text-align: right;

    & > span:first-of-type {
      font-size: 14px;
      font-weight: 400;

      padding-bottom: 10px;
    }

    & > span:last-of-type {
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

export { InfoContainer, OrderInfo, TotalContainer };
