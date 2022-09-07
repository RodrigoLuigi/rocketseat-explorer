import styled from 'styled-components';

export const Container = styled.a`
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 16px;

    display: flex;
    align-items: center;
    gap: 8px;
`;