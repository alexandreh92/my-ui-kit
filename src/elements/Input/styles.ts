import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* Sizes */

  &.large > div {
    & input {
      padding: 0.75rem 1rem;
      font-size: 1rem;
      line-height: 1.5rem;

      & + .icon > svg {
        width: 1.25rem;
        height: 1.25rem;
        min-width: 1.25rem;
        max-height: 1.25rem;
      }

      &.icon-left {
        padding-left: 3rem;

        & + div {
          left: 1.125rem;
        }
      }

      &.icon-right {
        padding-right: 3rem;

        & + div {
          right: 1.125rem;
        }
      }
    }
  }

  &.medium > div {
    & input {
      padding: 0.625rem 1rem;
      font-size: 0.875rem;
      line-height: 1.25rem;

      & + .icon > svg {
        width: 1rem;
        height: 1rem;
        min-width: 1rem;
        max-height: 1rem;
      }

      &.icon-left {
        padding-left: 2.75rem;

        & + div {
          left: 1.125rem;
        }
      }

      &.icon-right {
        padding-right: 2.75rem;

        & + div {
          right: 1.125rem;
        }
      }
    }
  }

  &.small > div {
    & input {
      padding: 0.5rem 0.75rem;
      font-size: 0.75rem;
      line-height: 1rem;

      & + .icon > svg {
        width: 0.75rem;
        height: 0.75rem;
        min-width: 0.75rem;
        max-height: 0.75rem;
      }

      &.icon-left {
        padding-left: 2.25rem;

        & + div {
          left: 0.875rem;
        }
      }

      &.icon-right {
        padding-right: 2.25rem;

        & + div {
          right: 0.875rem;
        }
      }
    }
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const TInput = styled.input`
  border: 0.063rem solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 0.25rem;

  background: ${({ theme }) => theme.colors.background};

  color: ${({ theme }) => theme.colors.gray[700]};

  outline: none;

  transition: all 300ms ease;

  width: 100%;

  &:focus,
  &:hover {
    border: 0.063rem solid ${({ theme }) => theme.colors.primary[500]};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  /* Error */

  &.error {
    border: 0.063rem solid ${({ theme }) => theme.colors.alert[500]};

    &:focus {
      border: 0.063rem solid ${({ theme }) => theme.colors.alert[500]};
    }
  }

  /* Disabled */

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[200]};

    cursor: not-allowed;
    & + div div {
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    & + svg,
    &:hover + svg {
      fill: ${({ theme }) => theme.colors.gray[400]};
    }
  }

  /* Icon */

  & + .icon > svg {
    fill: ${({ theme }) => theme.colors.gray[400]};
  }

  &:hover + .icon > svg,
  &:focus + .icon > svg {
    fill: ${({ theme }) => theme.colors.gray[600]};

    transition: fill 300ms ease;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  position: absolute;

  top: 50%;
  transform: translateY(-50%);

  &.clickable {
    cursor: pointer;
  }
`;
