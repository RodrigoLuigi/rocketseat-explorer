import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto ;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow: hidden;

        .back{
            margin: 40px auto;
            max-width: 1137px;
        }
    }
`;

export const Content = styled.div`
    max-width: 1137px;
    height: 80%;
    margin: 24px auto 156px;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        background-color: transparent;
        width: 8px;
    }
    
    ::-webkit-scrollbar-thumb{
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.ROSE};
    }

    p {
        text-align: justify;
        padding-right: 16px;

        line-height: 21px;
    }

`;

export const MovieInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;

    margin: 24px 0;

    h2 {
        font-size: 36px;
        font-weight: 500;;

    }

    > span {
        display: flex;
        align-items: center;
        gap: 10px;

        

        > svg {
            width: 20px;
            height: 20px;
        }
    }
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > div {
        display: flex;
        align-items: center;
        gap: 8px;
    
        img {
            width: 26px;
            height: 26px;
            border-radius: 50%;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.ROSE};
        }
    }
`;

export const TagsSection = styled.div`
    display: flex;
    align-items: center;
    
    margin: 40px 0;
`;

