import styled from 'styled-components';

export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 96%;
   bottom: 60px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;

   color: #0377FF;

   display: ${props => props.isVisible ? 'inline' : 'none'};
`;

export default Button;