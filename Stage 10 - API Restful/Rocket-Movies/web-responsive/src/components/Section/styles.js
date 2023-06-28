import styled from 'styled-components';

export const Container = styled.section`
 /*  max-height: 489px; *//* revisar */
  margin: 40px 0;
 /*  padding-right: 8px; */

  /* overflow-y: auto;

  ::-webkit-scrollbar{
    width: 8px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track{
    background-color: transparent;    
  } */

  > h2 {
    margin-bottom: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 20px;
    font-weight: 400;
  }
`;