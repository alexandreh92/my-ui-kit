import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;

  & > button {
    width: auto;

    & svg {
      fill: ${({ theme }) => theme.colors.primary[500]};
    }

    &[disabled] svg {
      fill: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`;

export const PagesContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 0 1rem;

  &.small > div {
    height: 2rem;
    width: 2rem;
  }

  &.medium > div {
    height: 2.5rem;
    width: 2.5rem;
  }

  &.large > div {
    height: 3rem;
    width: 3rem;
  }
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[100]};
  }

  &.active {
    background: ${({ theme }) => theme.colors.primary[500]};
    &,
    & div {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
