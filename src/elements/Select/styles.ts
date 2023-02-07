import styled from 'styled-components';

export const Container = styled.div`
  min-width: 200px;
  position: relative;

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;

    & > div select + div,
    & > div {
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    & > div:nth-child(2) > div {
      background-color: ${({ theme }) => theme.colors.gray[200]};
      & select + div {
        &::after {
          border-color: ${({ theme }) => theme.colors.gray[400]} transparent
            transparent transparent;
        }
      }
    }
  }

  &.large div select + div,
  &.large div select + div + div div {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &.medium div select + div,
  &.medium div select + div + div div {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  &.small div select + div,
  &.small div select + div + div div {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  & > div:nth-child(2) > div:hover {
    border: 0.063rem solid ${({ theme }) => theme.colors.primary[500]};
  }

  &.error,
  &.error.active {
    &:hover,
    & > div:nth-child(2) > div,
    .active,
    & > div:nth-child(2) > div,
    & > div:nth-child(2) > div select + div + div {
      border-color: ${({ theme }) => theme.colors.alert[500]}!important;
    }
  }

  &.active {
    & > div:nth-child(2) > div {
      border: 0.063rem solid ${({ theme }) => theme.colors.primary[500]};
      border-bottom: 0.063rem solid transparent;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;

      & select + div {
        &::after {
          border-color: transparent transparent
            ${({ theme }) => theme.colors.gray[700]} transparent;
          top: calc(50% - 9px);
        }

        & + div {
          display: block;
          & div:hover,
          .active {
            background-color: ${({ theme }) => theme.colors.gray[200]};
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 0.063rem solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 0.25rem;
  position: relative;

  & select {
    display: none;
  }

  transition: border-color 300ms ease;
`;

export const Selected = styled.div`
  width: 100%;

  &::after {
    position: absolute;
    content: '';
    top: calc(50% - 3px);
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: ${({ theme }) => theme.colors.gray[700]} transparent
      transparent transparent;
  }

  & + div div,
  & {
    color: ${({ theme }) => theme.colors.gray[700]};

    cursor: pointer;
    user-select: none;

    & span {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }
`;

export const Items = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  display: none;
  padding: 0;

  max-height: 12.5rem;
  overflow-y: auto;

  border-width: 0px 1px 1px 1px;
  border-color: ${({ theme }) => theme.colors.primary[500]};
  border-style: solid;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  margin: 0 -1px;

  & > div {
    background: #fff;
  }
`;
