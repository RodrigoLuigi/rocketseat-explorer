import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};
  border-radius: 10px;

  height: 56px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
    
  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    
    &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;