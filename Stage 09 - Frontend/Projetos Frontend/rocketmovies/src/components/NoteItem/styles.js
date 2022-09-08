import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 16px;

  border-radius: 10px;
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    background: transparent;
    padding-right: 12px;
        


    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;