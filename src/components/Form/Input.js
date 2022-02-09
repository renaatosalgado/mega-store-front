import styled from "styled-components";

const Input = styled.input`
  width: 350px;
  height: 58px;
  margin-bottom: 13px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #666666;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  pointer-events: ${(props) => (props.disabled ? "none" : "all")};

  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  color: ${(props) => (props.disabled ? "#AFAFAF" : "#000000")};
  background-color: #f5f5f5;
  

  &::placeholder {
    font-weight: 400;
    color: #666666;
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
