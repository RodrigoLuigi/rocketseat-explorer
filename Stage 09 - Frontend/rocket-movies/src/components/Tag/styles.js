import styled from 'styled-components';

export const Container = styled.span`
font-size: 12px;
text-align: center;
font-family: 'Roboto', sans-serif;

padding: 8px 16px;
margin-right: 8px;

border-radius: 8px;

color: ${({ theme }) => theme.COLORS.WHITE_100};
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;