import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 19px 16px;

  border: none;
  border-radius: 10px;

  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_825};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_825};;
  }
`;