import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: hidden;

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
`; */
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: max-content auto;
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
  max-width: 1160px;
  margin: 40px auto;
  padding: 0 2.3rem; 

  > header {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: center;
    gap: 2.2rem;

    h1 {
      font-size: 32px;
    }


    @media (min-width: 477px) {
      justify-content: space-between;
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
 
  /* max-height: 410px; */ /* modificado */
  margin-top: 37px;
  

  @media (min-width: 900px){
    overflow-y: scroll;
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
  }
`;

export const Search = styled.div`
  width: 100%;
`;

export const EmptyNote = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  border: 1px dashed ${({theme}) => theme.COLORS.ROSE};
  background-color: ${({theme}) => theme.COLORS.ROSE_900};
  padding: 22px;
  border-radius: 8px;
`;