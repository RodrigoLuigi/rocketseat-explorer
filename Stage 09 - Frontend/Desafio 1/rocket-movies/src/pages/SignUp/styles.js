import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    overflow: hidden;
`;

export const Form = styled.form`
    padding: 0 0rem;/* 3.3rem */
    margin: 0 auto; /* adicionado */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    animation: toLeft 900ms backwards;


    @media (min-width: 40em) {
        padding: 0 136px;
    }

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }
    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }
    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        
    }
    > a {
        margin-top: 42px;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }
`;

export const Background = styled.div`
    animation: toRight 900ms backwards;

    @media (min-width: 900px) { /* adicionado */
        flex: 1;
        background: url(${backgroundImg}) no-repeat center center;
        background-size: cover;
    }
`;