import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  gap: 64px;
  justify-content: space-between;
  align-items: center;

  padding: 0 123px;

`;

export const Brand = styled(Link)`
  h1 {
    font-size: 24px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;

export const Search = styled.div`
  flex: 1;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

    > div {
      display: flex;
      flex-direction: column;
      line-height: 24px;

      strong {
        font-size: 14px;
        font-weight: 700;
        white-space: nowrap;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      button {
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        background: none;
        border: none;
      }

      div {
        align-self: flex-end;        
      }
    }

    img {
      width: 64px;
      height: 64px;

      border-radius: 50%;
      border-width: 1px;
      border-style: solid;
      border-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
`;
