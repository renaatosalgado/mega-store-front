import styled from "styled-components";

const Input = styled.input`
  width: calc(100vw - 50px);
  height: 58px;
  margin-bottom: 13px;
  padding: 15px;
  border-radius: 5px;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  pointer-events: ${(props) => (props.disabled ? "none" : "all")};

  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
  color: ${(props) => (props.disabled ? "#AFAFAF" : "#666666")};

  &::placeholder {
    font-weight: 400;
    color: #000000;
  }

  &:focus {
    outline: none;
  }
`;

export default Input;
