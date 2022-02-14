import styled from "styled-components";

const SubContainer = styled.div`
    max-width: 968px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 50px 0;

    & > span:first-of-type {
        font-size: 40px;
        font-weight: 600;
        color: red;

        padding-bottom: 50px;
    }

    & > span:last-of-type {
        font-size: 24px;

        padding-bottom: 200px;
    }
`;

export {
    SubContainer,
}