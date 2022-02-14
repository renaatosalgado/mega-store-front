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

  gap: 10px;

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
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: 700;
  line-height: 17.61px;

  color: #fff;

  &:hover {
    border-bottom: 3px solid #fff;
    margin-bottom: -2px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 20px;

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

const UserEnvironment = styled.div`
  width: 150px;

  font-size: 20px;
  font-weight: 400;
  line-height: 21px;

  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  & > .icon {
    padding: 5px !important;
  }
`;

const Cart = styled(Link)`
  width: 50px;
  height: 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 30px;
  color: #FFF;

  padding: 25px;
  border-radius: 50%;

  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background-color: #FFF;
    color: #000;
    transition: 0.8s;
  }
`;

const TotalItensCart = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 21px;
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
