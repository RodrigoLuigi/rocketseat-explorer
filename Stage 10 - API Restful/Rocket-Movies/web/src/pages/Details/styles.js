import styled from 'styled-components';

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

  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 8px;

    color: ${({ theme }) => theme.COLORS.ROSE};
    margin-bottom: 24px;
  }      

  .tags {
    margin: 40px 0;
  }

  p {
    text-align: justify;
    margin-right: 8px ;
  }

`;

export const MovieNote = styled.div`
  overflow-y: scroll;
  max-height: 450px;
  margin: 24px 0;

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
`;

export const MovieInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 19px;

    h2 {
      font-size: 36px;
      font-weight: 500;
      line-height: 47px;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

  }

  button {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    color: ${({ theme }) => theme.COLORS.ROSE};
    padding: 16px;
    border-radius: 10px;

    font-weight: 500;
  }
`; 

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
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