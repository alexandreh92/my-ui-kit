import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  &.error > label {
    & > span {
      border-color: ${({ theme }) => theme.colors.alert[500]};
    }
  }
`;

export const Content = styled.label`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;

  & > input {
    &[disabled] ~ span,
    &[disabled] + div {
      color: ${({ theme }) => theme.colors.gray[400]};
      cursor: not-allowed;
    }

    &[disabled] ~ span {
      background-color: ${({ theme }) => theme.colors.gray[200]};

      &:hover {
        border-color: ${({ theme }) => theme.colors.gray[300]};
      }
    }
  }

  & input:checked {
    & ~ span {
      border-color: ${({ theme }) => theme.colors.primary[500]};
      background-color: ${({ theme }) => theme.colors.background};
    }

    & ~ span::after {
      display: block;
    }

    &[disabled] ~ span {
      background-color: ${({ theme }) => theme.colors.gray[200]};
      border-color: ${({ theme }) => theme.colors.gray[300]};

      &::after {
        background-color: ${({ theme }) => theme.colors.gray[400]};
        border-radius: 50%;
        border: none;
      }
    }
  }

  & span {
    &::after {
      transform: rotate(45deg);
    }
  }

  &.top {
    & > span {
      margin: 0;
    }

    & > div {
      margin-bottom: 17px;
    }

    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Label = styled.div`
  color: ${({ theme }) => theme.colors.gray[700]};

  &.large {
    font-size: 1rem;
  }

  &.medium {
    font-size: 0.875rem;
  }

  &.small {
    font-size: 0.75rem;
  }
`;

export const Checkradio = styled.span<{
  size: 'large' | 'medium' | 'small';
}>`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 50%;
  transition: all 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[100]};
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${({ size }) =>
    size === 'large' &&
    css`
      height: 24px;
      width: 24px;
      position: relative;
      margin-right: 16px;
      &::after {
        width: 12px;
        height: 12px;
        background-color: ${({ theme }) => theme.colors.primary[500]};
        border-radius: 50%;
        border: none;
        top: 5px;
        left: 5px;
      }
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      height: 16px;
      width: 16px;
      position: relative;
      margin-right: 8px;
      &::after {
        width: 8px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.primary[500]};
        border-radius: 50%;
        border: none;
        top: 3px;
        left: 3px;
      }
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      height: 12px;
      width: 12px;
      position: relative;
      margin-right: 8px;
      &::after {
        width: 6px;
        height: 6px;
        background-color: ${({ theme }) => theme.colors.primary[500]};
        border-radius: 50%;
        border: none;
        top: 2px;
        left: 2px;
      }
    `}
`;

export const Caption = styled.div<{ disabled?: boolean }>`
  margin-top: 0.5rem;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray[400] : theme.colors.gray[600]};

  &.small,
  &.medium {
    padding-left: 21px;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  &.large {
    padding-left: 30px;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export const Error = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.alert[500]};

  &.small,
  &.medium {
    padding-left: 21px;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  &.large {
    padding-left: 30px;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;
