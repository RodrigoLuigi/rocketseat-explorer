import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROSE_900};

  border: none;
  border-radius: 16px;

  padding: 32px;
  margin-bottom: 24px;

  > h1 {
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
  }

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;

    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-top: 15px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;     /* fallback */
    max-height: 32px;      /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  > footer {
      width: 100%;
      display: flex;
      margin-top: 25px;
    }
`;