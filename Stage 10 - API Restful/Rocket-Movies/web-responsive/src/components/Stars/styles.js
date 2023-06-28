import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 10px;
  
    > svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.ROSE};
    }
`;