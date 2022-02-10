import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.header`
  height: 130px;
  width: 968px;

  color: #fff;

  background-color: #0333ff;
`;

const UpperBar = styled.div`
  max-width: 968px;
  height: 90px;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
`;

const LowerBar = styled.div`
  width: 968px;
  height: 40px;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  gap: 15px;
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

const Logo = styled(Link)`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 36px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: -2px;

  font-family: "Saira Stencil One", cursive;
`;

const SearchBar = styled.div`
  height: 100%;

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
  cursor: pointer;

  height: 100%;

  position: absolute;
  top: 0px;
  right: 10px;
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
  Logo,
  LowerBar,
  SearchBar,
  SearchLogo,
  UpperBar,
  UserEnvironment,
  TotalItensCart,
  DepartmentLink,
  Input,
};
