import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    /* Normal */
    /* TODO */

    &.vertical {
      * {
        color: ${theme.colors.gray[800]};
        fill: ${theme.colors.gray[800]};
      }

      display: inline-flex;
      flex-direction: column;
      gap: 0;

      align-items: flex-start;

      padding: 0.5rem 0;

      width: auto;

      border: 0.063rem solid ${theme.colors.gray[300]};
      border-radius: 0.25rem;
      box-shadow: 0px 8px 32px 0px #1a1a1a3d;

      background: ${theme.colors.white};

      & > .item {
        padding: 0.625rem 1rem;

        border: none;

        width: 100%;

        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;

        &:hover {
          background: ${theme.colors.primary[100]};
        }

        & > .badge {
          top: 0.25rem;
          right: 0.25rem;

          color: ${theme.colors.white};
        }

        &.active {
          background: ${theme.colors.primary[100]};
        }

        &.badged {
          padding-right: 1.75rem;
        }

        &.icon {
          display: flex;
          align-items: center;

          & svg {
            margin-right: 10px;

            min-width: 1rem;
            max-width: 1rem;
            min-height: 1rem;
            max-height: 1rem;
          }
        }
      }
    }

    /* Tabular */
    &.tabular {
      display: flex;
      gap: 1.25rem;

      border-bottom: 0.125rem solid ${theme.colors.gray[200]};

      & > .item {
        padding: 1.125rem 0.5rem;

        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.25rem;

        color: ${theme.colors.gray[400]};
        fill: ${theme.colors.gray[400]};

        &.icon {
          display: flex;
          align-items: center;

          & svg {
            margin-right: 10px;

            min-width: 1rem;
            max-width: 1rem;
            min-height: 1rem;
            max-height: 1rem;
          }
        }

        &.active {
          color: ${theme.colors.primary[500]};
          fill: ${theme.colors.primary[500]};

          border-bottom: 0.125rem solid ${theme.colors.primary[500]};

          margin: 0 0 -0.125rem;
        }
      }
    }
  `}
`;
