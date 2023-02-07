import styled, { css } from 'styled-components';
import { HeadingMode, Size } from '../../@types';
import Heading from '../Heading';

type CustomLabel = {
  size: Size;
  renderAs?: string;
};

const handleCaptionSize = (inputSize: Size): HeadingMode => {
  switch (inputSize) {
    case 'small':
    case 'medium':
      return 'body-small';
    case 'large':
      return 'body-medium';
  }
};

export const Container = styled(Heading).attrs(({ size }: CustomLabel) => ({
  weight: handleCaptionSize(size),
}))<CustomLabel>`
  &.error {
    color: ${({ theme }) => theme.colors.alert[500]};
  }

  ${({ size }) =>
    size === 'small' &&
    css`
      margin-top: 0.25rem;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
      margin-top: 0.5rem;
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      margin-top: 0.5rem;
    `};

  position: absolute;

  color: ${({ theme }) => theme.colors.gray[600]};
`;
