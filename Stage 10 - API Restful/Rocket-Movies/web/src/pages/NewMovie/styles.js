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
`;

export const Content = styled.div`
  max-width: 1137px;
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
  max-height: 450px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 40px;
  
  padding-right: 8px;
  padding-bottom: 12px;

  h1 { 
    font-size: 36px;
    font-weight: 500;
    line-height: 47px;
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 40px;

    button {
      width: 50%;
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

  
  

  /* .btn-delete {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    color: ${({ theme }) => theme.COLORS.ROSE};
  } */
`;