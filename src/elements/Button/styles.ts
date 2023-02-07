import styled, { css } from 'styled-components';

import GenericComponent from '../GenericComponent';
import Spinner from '../Spinner';

export const Container = styled(GenericComponent)<{
  disabled?: boolean;
}>`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    background-color: ${theme.colors.background};

    border: none;
    border-radius: 0.25rem;

    color: ${theme.colors.gray[700]};

    width: 100%;
    padding: 0.75rem;

    cursor: pointer;

    font-weight: 600;

    overflow: hidden;

    position: relative;

    transition: all 0.2s ease, background-color 0.2s ease-in-out;

    z-index: 1;

    /* Sizes */

    &.large {
      font-size: 1rem;
      height: 3rem;

      &.icon svg {
        height: 1.25rem;
      }
    }

    &.medium {
      font-size: 0.875rem;
      height: 2.5rem;

      &.icon svg {
        height: 1rem;
      }
    }

    &.small {
      font-size: 0.75rem;
      height: 2rem;

      &.icon svg {
        height: 0.75rem;
      }
    }

    /* Types */

    &.primary {
      background-color: ${theme.colors.primary[500]};

      color: ${theme.colors.white};
      fill: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.primary[800]};
      }
    }

    &.secondary {
      background-color: ${theme.colors.white};

      border: 0.063rem solid ${theme.colors.primary[500]};

      color: ${theme.colors.primary[500]};
      fill: ${theme.colors.primary[500]};

      &:hover {
        background-color: ${theme.colors.primary[100]};
      }
    }

    &.tertiary {
      border: 0.063rem solid ${theme.colors.gray[300]};

      &:hover {
        border-color: ${theme.colors.gray[700]};
      }
    }

    &.destructive {
      background-color: ${theme.colors.alert[500]};

      color: ${theme.colors.white};
      fill: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.alert[800]};
        border-color: ${theme.colors.alert[800]};
      }
    }

    &.destructive-secondary {
      border: 0.063rem solid ${theme.colors.alert[500]};

      color: ${theme.colors.alert[500]};
      fill: ${theme.colors.alert[500]};

      &:hover {
        background-color: ${theme.colors.alert[100]};
      }
    }

    &.success {
      background-color: ${theme.colors.success[500]};
      color: ${theme.colors.white};
      fill: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.success[700]};
      }
    }

    &.success-secondary {
      background-color: ${theme.colors.background};
      border: 0.063rem solid ${theme.colors.success[500]};
      color: ${theme.colors.success[500]};
      fill: ${theme.colors.success[500]};

      &:hover {
        background-color: ${theme.colors.success[100]};
      }
    }

    /* Loading */

    &.loading > .spinner {
      &::after {
        border-color: ${theme.colors.gray[400]};
        border-bottom-color: transparent;
      }
    }

    /* Disabled */

    &[disabled] {
      background-color: ${theme.colors.gray[200]} !important;

      border: 0.063rem solid ${theme.colors.gray[200]} !important;

      color: ${theme.colors.gray[400]};
      fill: ${theme.colors.gray[400]};

      cursor: not-allowed;
    }

    /* Text Mode */

    &.text {
      background-color: inherit;

      border: none !important;

      padding: 0;

      height: initial;

      &:hover {
        background-color: inherit;
      }

      &[disabled] {
        background-color: inherit !important;

        color: ${theme.colors.gray[400]} !important;
        fill: ${theme.colors.gray[400]} !important;
      }

      &.primary {
        color: ${theme.colors.primary[500]};
        fill: ${theme.colors.primary[500]};

        &:hover {
          color: ${theme.colors.primary[800]};
          fill: ${theme.colors.primary[800]};
        }
      }

      &.secondary {
        color: ${theme.colors.gray[700]};
        fill: ${theme.colors.gray[700]};

        &:hover {
          color: ${theme.colors.primary[100]};
          fill: ${theme.colors.primary[100]};
        }
      }

      &.destructive,
      &.destructive-secondary {
        color: ${theme.colors.alert[500]};
        fill: ${theme.colors.alert[500]};

        &:hover {
          color: ${theme.colors.alert[800]};
          fill: ${theme.colors.alert[800]};
        }
      }

      &.success,
      &.success-secondary {
        color: ${theme.colors.success[500]};
        fill: ${theme.colors.success[500]};

        &:hover {
          color: ${theme.colors.success[700]};
          fill: ${theme.colors.success[700]};
        }
      }
    }

    /* Icon */
    &.icon {
      gap: 0.3rem;

      &.right {
        flex-direction: row-reverse;
      }
    }
  `}
`;

export const Loading = styled(Spinner)``;
