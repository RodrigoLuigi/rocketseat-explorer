import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    min-height: 274px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    resize: none;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;
    
    &:placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;