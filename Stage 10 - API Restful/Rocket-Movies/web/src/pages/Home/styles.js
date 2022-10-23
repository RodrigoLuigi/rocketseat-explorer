import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    ::-webkit-scrollbar{
      width: 1px;
    }

    ::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    ::-webkit-scrollbar-track{
      background-color: transparent;
    }
  }
`;

export const Content = styled.div`

    max-width: 1137px;
    margin: 40px auto;

    > header {
      width: 100%;

      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 32px;
      }
    }
`;

export const NewMovie = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 48px;
  padding: 0 32px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > svg {
      width: 20px;
      height: 20px; 
      margin-right: 8px;
    }
`;

export const MovieNotes = styled.div`
  overflow-y: none;
  max-height: 768px;
  margin-top: 37px;
  padding-right: 8px;

  ::-webkit-scrollbar{
    width: 8px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track{
    background-color: transparent;    
  }
  
  > :last-child {
    margin-bottom: 0;
  }
`;

export const Search = styled.div`
  width: 100%;
`;