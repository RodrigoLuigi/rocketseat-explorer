import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  header .search {
    display: none;
  }

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
  padding: 0 2.3rem;
  margin: 40px auto;

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 8px;

    color: ${({ theme }) => theme.COLORS.ROSE};
    margin-bottom: 24px;
  }      

  p {
    text-align: justify;
    margin-right: 8px ;
  }
`;

export const MovieNote = styled.div`
  margin: 24px 0;

  

  > button {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    color: ${({ theme }) => theme.COLORS.ROSE};
    padding: 16px;
    border-radius: 10px;
    margin: 40px auto 0;
    font-weight: 500;
  }

  @media (min-width: 900px) {
  /* max-height: 410px; */ /* modificado */
  overflow-y: scroll;


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

  }
`;

export const MovieInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 19px;
  
  margin-bottom: 24px;
  
  h2 {
    font-size: clamp(22px , 22px + 0.5vw , 36px);
    font-weight: 500;
    line-height: 47px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`; 

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;

  > div {
    display: flex;
    
    align-items: center;
    gap: 8px;

   img {
    width: 26px;
    height: 26px;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
   }

   svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
   }

   span {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
   }
  }
`; 