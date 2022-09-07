import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > svg {
    width: 18px;
    height: 18px;

    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;