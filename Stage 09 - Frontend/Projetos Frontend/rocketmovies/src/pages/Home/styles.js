import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 100px auto;
  grid-template-areas: 
  "header"
  "newmovie"
  "content";

  > main {
    width: 100%;
    height: calc(100vh - 116px);
  }
`;

export const NewMovie = styled.div`
  grid-area: newmovie;

  height: 100px;
  max-width: 1137px;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > h2 {
    font-size: 32px;
    line-height: 42px;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    padding: 13.5px 32px;

    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    background-color: ${({ theme }) => theme.COLORS.ROSE};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  max-height: 400px;

  margin: 0 auto;
  padding-right: 10px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 8px;
  }
`;
