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

    }
`;

export const Content = styled.div`
    max-width: 1137px;
    margin: 0 auto;


    > a {
        margin-top: 40px
    }
`;

export const Form = styled.form`
    max-height: 400px;
    overflow-y: scroll;

    margin-top: 24px;
    padding-right: 10px;

    ::-webkit-scrollbar{
        background-color: transparent;
        width: 8px;
    }
    
    ::-webkit-scrollbar-thumb{
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.ROSE};
    }

    > h1 {
        font-weight: 500;   
        font-size: 36px;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    > div {
        display: flex;
        gap: 40px;

        margin: 40px 0;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;

        gap: 24px;

        width: 100%;
        padding: 16px;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
    }

    .btn-delete {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;
