import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

export const Menu = styled.ul`
    grid-area: menu;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding-top: 64px;
    text-align: center;

    > li {
        margin-bottom: 24px;
    }
`;

export const Search = styled.div`
    grid-area: search;

    padding: 64px 64px 0;
`;

export const Content = styled.div`
    grid-area: content;

    padding: 0 64px;
    overflow-y: auto;
`;

export const NewNote = styled.button`
    grid-area: newnote;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        margin-right: 8px;
    }

`;


