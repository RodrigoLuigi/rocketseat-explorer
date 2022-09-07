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
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;

  > a {
    margin-top: 40px;
  }
`;

export const MovieDetails = styled.div`
  max-height: 400px;
  overflow-y: scroll;

  margin-top: 24px;
  padding-right: 10px;

  ::-webkit-scrollbar{
    width: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > div {
    display: flex;
    align-items: center;

    h1 {
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;

      margin-right: 20px;
    }
  }

  .tags {
    margin: 40px 0;
  }

  > p {
    text-align: justify;
  }
`;

export const MovieAuthor = styled.div`
  display: flex;
  gap: 8px;

  margin-top: 24px;

  img {
    width: 24px;
    height: 24px;

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 35px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > svg { 
      color: ${({ theme }) => theme.COLORS.ROSE};
    }

  }
`;
