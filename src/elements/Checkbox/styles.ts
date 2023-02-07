import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 24px;

  &.error div {
    & span {
      border-color: ${({ theme }) => theme.colors.alert[500]};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &[disabled] ~ span,
    &[disabled] + label {
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
      background-color: ${({ theme }) => theme.colors.primary[500]};
    }

    & ~ span::after {
      display: block;
    }

    &[disabled] ~ span {
      background-color: ${({ theme }) => theme.colors.gray[400]};
    }
  }

  & span {
    &::after {
      transform: rotate(45deg);
    }
  }

  &.large {
    height: 24px;
    padding-left: 30px;

    & label {
      font-size: 1rem;
    }

    & span {
      height: 24px;
      width: 24px;

      &::after {
        left: 8px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
      }
    }
  }

  &.medium,
  &.small {
    height: 16px;
    padding-left: 21px;

    & label {
      font-size: 0.875rem;
    }

    & span {
      height: 16px;
      width: 16px;

      &::after {
        left: 4.5px;
        top: 2.4px;
        width: 3px;
        height: 6px;
        border: solid white;
        border-width: 0 2px 2px 0;
      }
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;

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

  &.large {
    height: 24px;
    width: 24px;
  }

  &.medium,
  &.small {
    height: 16px;
    width: 16px;
  }
`;

export const Caption = styled.div`
  margin-top: 0.5rem;
  position: absolute;

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

  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Error = styled.div`
  margin-top: 0.5rem;
  position: absolute;

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
  color: ${({ theme }) => theme.colors.alert[500]};
`;
