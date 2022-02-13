import styled from "styled-components";

const TitleHeader = styled.div`
    min-width: 968px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-family: Raleway;
    font-size: 50px;
    font-weight: 700;
    color: green;

    margin-top: 50px;
`;

const OrderInfo = styled.div`
    min-width: 968px;


    display: flex;
    flex-direction: column;
    justify-content: flex-start;

`;

export {
    TitleHeader,
    OrderInfo
}