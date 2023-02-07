import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3.438rem auto;
  grid-template-rows: 2.563rem;

  font: 'Roboto', 0.875rem/1.25rem, sans-serif;
  font-weight: 700;

  transition: all 200ms ease;

  color: ${({ theme }) => theme.colors.white};

  overflow: hidden;

  cursor: pointer;

  & svg {
    fill: ${({ theme }) => theme.colors.gray[500]};

    width: 1.25rem;
    height: 1.25rem;
  }

  &.active,
  &:hover {
    & svg {
      fill: ${({ theme }) => theme.colors.white};
    }

    background: ${({ theme }) => theme.colors.gray[800]};
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;
