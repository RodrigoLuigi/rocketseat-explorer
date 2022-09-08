import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled(Link)`
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 16px;

    display: flex;
    align-items: center;
    gap: 8px;
`;