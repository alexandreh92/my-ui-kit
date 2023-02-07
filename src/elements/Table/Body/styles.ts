import styled from 'styled-components';

export const TBody = styled.tbody`
  &.hooverable tr:hover {
    background: ${({ theme }) => theme.colors.primary[200]};
    cursor: pointer;
  }
`;
