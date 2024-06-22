import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

 
  
  > .content {
    max-width: 1160px;
    min-height: 11.6rem ;

    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 3.4rem;
    
    padding: 0 2.3rem; 

    span {
      font-size: clamp(1.8rem, 1.8rem + 0.5vw, 2.4rem);
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.ROSE};
    }

    .search {
      order: 1;
      width: 100%;
    }


    @media (min-width: 40em){
      flex-wrap: nowrap;
      
      .search {
        order: 0;
      } 
    }

    @media (min-width: 900px){
      gap: 64px;
    }
  }
  

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 0.9rem;
    line-height: 2.4rem;

    div {
    display: flex;
    flex-direction: row-reverse;
    }

    strong {
      font-size: clamp(1.2rem, 1.2rem + 0.5vw, 1.8rem);
      white-space: nowrap;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      background: none;
      border: none;

      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > a {
    width: clamp(3.2rem, 3.2rem + 5vw , 6.4rem);
    height: clamp(3.2rem, 3.2rem + 5vw , 6.4rem);

    img {
      width: clamp(3.2rem, 3.2rem + 5vw , 6.4rem);
      height: clamp(3.2rem, 3.2rem + 5vw , 6.4rem);
      object-fit: cover;

      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }


  @media (min-width: 40em) {
      padding-top: 0;
    }
`;

