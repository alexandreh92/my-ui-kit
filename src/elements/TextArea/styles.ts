import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  div {
    bottom: 0;
    left: 0;
    opacity: 0;
    padding: 10px;
    position: absolute;
    transition: visibility 0s, opacity 0.5s linear;
    visibility: hidden;
  }
`;

export const TTextArea = styled.textarea<{
  enableButton?: boolean;
}>`
  background: ${({ theme }) => theme.colors.background};
  border: 0.063rem solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  outline: none;
  padding: 10px;
  resize: vertical;

  &:focus {
    border: 0.063rem solid ${({ theme }) => theme.colors.primary[500]};
  }

  ${(props) =>
    props?.enableButton &&
    css`
      &:focus + div {
        opacity: 1;
        visibility: visible;
      }
    `}

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &.error {
    border: 0.063rem solid ${({ theme }) => theme.colors.alert[500]};

    &:focus {
      border: 0.063rem solid ${({ theme }) => theme.colors.alert[500]};
    }
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[200]};
    cursor: not-allowed;
  }
`;
