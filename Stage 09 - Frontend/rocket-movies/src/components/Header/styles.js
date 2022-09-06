import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 0 123px;

  span {
    font-size: 24px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.ROSE};
  }

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;

    div {
    display: flex;
    flex-direction: row-reverse;
    }

    strong {
      font-size: 18px;
      white-space: nowrap;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      background: none;
      border: none;

      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
`;

export const Search = styled.div`
width: 100%;
`;