import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  border: none;
  border-radius: 10px;

  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;