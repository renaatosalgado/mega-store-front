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
   
   display: ${props => props.isVisible ? 'inline' : 'none'};
   
   & > * {
      color: #0377FF;
      -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
      filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
   }
`;

export default Button;