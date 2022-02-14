import styled from "styled-components";

const SubContainer = styled.div`
    min-width: 968px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 50px;

    & > div {
        
    }

    & > div > span {
        
    }
`;

const InfoContainer = styled.div`
    min-width: 60%;

    display: flex;
    flex-direction: column;

    padding: 20px;

    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.12);

    & > span {
        text-align: center;
        
        font-size: 26px;
        font-weight: 600;

        padding-bottom: 20px;
    }
`;

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
    display: flex;
    flex-direction: column;

    margin-bottom: 5px;
    padding: 30px;
    gap: 15px;

    border: 1px solid #000;

    background-color: white;

    & div:first-of-type > span {
        font-size: 16px;
        font-weight: 600;

    }

    & > div {
        display: flex;
        justify-content: space-between;
    }

    & > div:last-of-type {
        align-items: flex-end;
    }
`;

const TotalContainer = styled.div`
    width: 100%;

    padding-top: 15px;

    display: flex;
    justify-content: space-between;

    & > div:first-of-type {
        display: flex;
        flex-direction: column;
        
        text-align: left;


        & > span:first-of-type {
            font-size: 14px;
            font-weight: 400;
            
            padding-bottom: 10px;
        }

        & > span:last-of-type {    
            font-size: 20px;
            font-weight: 700;

        }
    }
    
    & > div:last-of-type {
        display: flex;
        flex-direction: column;
        
        text-align: right;
        
        & > span:first-of-type {
            font-size: 14px;
            font-weight: 400;
            
            padding-bottom: 10px;
        }

        & > span:last-of-type {    
            font-size: 20px;
            font-weight: 700;
        }
    }
`;

const BackToMainButton = styled.button`
    width: 300px;
    height: 50px;   

    margin: 70px 0;

    border-radius: 5px;

    color: #FFF;
    background-color: #1976D2;

    cursor: pointer;

    &:hover {
        filter: brightness(120%);
    }
`;

const ErrorMessage = styled.div`
    min-width: 968px;

    padding-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:first-of-type {
        padding: 50px;

        font-size: 40px;
        font-weight: 500;
        color: red;
    }

    & > div:last-of-type {
        font-size: 20px;

        padding-bottom: 350px;
    }
`

export {
    TitleHeader,
    OrderInfo,
    SubContainer,
    InfoContainer,
    TotalContainer,
    BackToMainButton,
    ErrorMessage
}