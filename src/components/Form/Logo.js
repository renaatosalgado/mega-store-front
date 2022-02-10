import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled(Link)`
  height: 90px;

  color: #ffffff;
  background-color: #0333ff;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 36px;
  font-weight: 200;
  line-height: 30px;
  letter-spacing: -2px;

  font-family: "Saira Stencil One", cursive;
`;
export default Logo;
