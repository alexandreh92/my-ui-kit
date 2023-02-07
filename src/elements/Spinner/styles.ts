import styled from 'styled-components';

export const Container = styled.span`
  background: transparent;

  &:not(.inline) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  &::before {
    position: absolute;
    content: '';

    top: 0;

    border-radius: 100%;

    border: 0.125rem solid rgba(0, 0, 0, 0.1);
  }

  &::after {
    position: absolute;
    content: '';

    top: 0;

    border-radius: 100%;
    border: 0.125rem solid;
    border-color: ${({ theme }) => theme.colors.primary[500]};
    border-bottom-color: transparent;

    animation: spin 1s 0s infinite linear;

    animation-fill-mode: both;

    z-index: 1000;
  }

  &.small {
    min-width: 0.75rem;
    min-height: 0.75rem;

    &::after,
    &::before {
      width: 0.625rem;
      height: 0.625rem;
    }
  }

  &.medium {
    min-width: 1rem;
    min-height: 1rem;

    &::after,
    &::before {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  &.large {
    min-width: 1.25rem;
    min-height: 1.25rem;

    &::after,
    &::before {
      width: 1rem;
      height: 1rem;
    }
  }

  &.big {
    min-width: 1.625rem;
    min-height: 1.625rem;

    &::after,
    &::before {
      width: 1.375rem;
      height: 1.375rem;
    }
  }

  &.extra-large {
    min-width: 2.5rem;
    min-height: 2.5rem;

    &::after,
    &::before {
      width: 2.25rem;
      height: 2.25rem;
    }
  }

  &.inline {
    display: inline-block;
    position: relative;
  }

  &.inverted::before {
    border: 0.125rem solid rgba(255, 255, 255, 0.15);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
