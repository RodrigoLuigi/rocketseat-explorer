import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content"
  ;

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
  
  > button {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 8px;

    color: ${({ theme }) => theme.COLORS.ROSE};
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  max-width: 1137px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  
  padding-bottom: 12px;

  h1 { 
    font-size: clamp(2.4rem, 2.4rem + 0.5vw , 3.6rem);
    font-weight: 500;
    line-height: 47px;
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 10px;

    button {
      width: 100%;
    }
  }

  > section {
    margin: 0;

    .tags {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      gap: 24px;

      height: auto;
      padding: 16px;
      
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    }
  }

  @media (min-width: 900px){
    max-height: 410px;

    gap: 40px;

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

    > div {
      gap: 40px;

      button {
        width: 50%;
      }
    }
  }
`;