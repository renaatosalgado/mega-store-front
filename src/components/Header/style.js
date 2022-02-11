import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.header`
  height: 130px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  background-color: #1C285C;
`;

const UpperBar = styled.div`
  max-width: 968px;
  height: 90px;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  background-color: #1C285C;

  img {
    cursor: pointer;
  }
`;

const LowerBar = styled.div`
  width: 968px;
  height: 40px;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  gap: 15px;

  background-color: #1C285C;
`;

const DepartmentLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: 700;
  line-height: 17.61px;

  color: #fff;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    position: relative;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;

  width: 530px;
  height: 100%;

  font-size: 20px;
  font-weight: 400;
  line-height: 24px;

  padding: 15px;

  border-radius: 10px;

  color: #000;
  background-color: #fff;
`;

const SearchLogo = styled.button`
  all: unset;
  box-sizing: border-box;
  
  height: 100%;
  
  font-size: 30px;
  color: #000;

  display: flex;
  justify-content: center;
  align-items: center;
  
  position: absolute;
  top: 0px;
  right: 10px;
  
  cursor: pointer;
`;

const UserEnvironment = styled(Link)`
  width: 200px;

  font-size: 20px;
  font-weight: 400;
  line-height: 21px;

  padding: 10px;

  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;

  cursor: pointer;
`;

const Cart = styled(Link)`
  width: 65px;
  height: 30px;

  font-size: 30px;
  color: #FFF;

  position: relative;

  cursor: pointer;
`;

const TotalItensCart = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 21px;

  position: absolute;
  top: 5px;
  right: 0;
`;

export {
  Container,
  Cart,
  LowerBar,
  SearchBar,
  SearchLogo,
  UpperBar,
  UserEnvironment,
  TotalItensCart,
  DepartmentLink,
  Input,
};
