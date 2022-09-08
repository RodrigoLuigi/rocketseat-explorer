import backgroundImg from '../../assets/background.png';

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > p {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > h2 {
    font-weight: 500;
    font-size: 24px;
    margin: 48px 0;
  }

  > button {
    margin-top: 24px
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;