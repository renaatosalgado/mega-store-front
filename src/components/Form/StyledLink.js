import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 15px;
  line-height: 17px;

  color: #666666;

  span:last-of-type {
    border-radius: 5px;

    padding: 5px;
    margin-left: 10px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledLink;
