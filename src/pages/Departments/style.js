import styled from "styled-components";

const SubContainer = styled.div`
    max-width: 968px;

    display: flex;
    flex-direction: column;

    padding: 50px 0;
`;

const DeptHeader = styled.div`
    min-width: 968px;

    font-family: Raleway;
    font-size: 50px;
    font-weight: 700;
    color: #1C285C;

    margin-top: 50px;
    
`;

const ItemsContainer = styled.div`
    /* display: grid;
    grid-template-columns: 10em 10em 10em; */

    ${props => props.isLoading
        ? 'display: flex; justify-content: center;'
        : 'display: grid; grid-template-columns: auto auto auto auto auto;'
    }
    
    gap: 55px;

    padding-bottom: 50px;

    & > * {
        border: 1px solid #f5f5f5
    }

    span:first-of-type{
        border: none;
    }
`;

const InfinityBorder = styled.div`
    width: 100vw;
    height: 1px;

    margin-top: 50px;

    background: #0377FF;
`;

export {
    SubContainer,
    DeptHeader,
    ItemsContainer,
    InfinityBorder
}