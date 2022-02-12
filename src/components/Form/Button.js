import styled from "styled-components";

const Button = styled.button`
  width: 350px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;

  background-color: #1565C0;
  color: #ffffff;

  &:hover {
    filter: brightness(120%);
  }
`;

export default Button;
