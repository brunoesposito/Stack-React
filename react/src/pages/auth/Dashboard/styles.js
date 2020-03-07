import styled from 'styled-components';

export const BoxDashboard = styled.div`
    max-width: 400px;
    width: 100%;
    margin: auto;

    &:hover {

        img {
            filter: grayscale(100%);
        }
    }
`;

export const BoxTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h1 {
        margin: 0;
    }
    button {
        color: #467ab2;
        border: 0;
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 1.1rem;
    }
`;

export const BoxPlates = styled.div`
    border-radius: 10px;
    margin-bottom: 40px;
    box-shadow: 0 2px 3px #d5d5d5;
    transition: 300ms all;
    overflow: hidden;
    
    &:hover {
        transform: scale(1.05);

        img {
            filter: grayscale(0);
        }
    }
    img {
        width: 100%;
        max-width: 100%;
        margin: auto;
        transition: 300ms all;
    }
    p {
        color: #9b9b9b;
        padding: 0 20px;
    }
`;
