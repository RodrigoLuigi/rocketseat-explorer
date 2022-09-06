import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.ROSE_900};
  border: none;
  border-radius: 16px;

  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 8px;
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;     /* fallback */
    max-height: 32px;      /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;

    margin: 24px 0;
    
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    text-align: justify;
  }

  > footer {
    width: 100%;
    display: flex;
  }
`;