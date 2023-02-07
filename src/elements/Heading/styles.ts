import styled from 'styled-components';

import GenericComponent from '../GenericComponent';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray[700]};

  &.body-small {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 400;
  }

  &.body-medium {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
  }

  &.body-large {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  &.subtitle {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 400;
  }

  &.header-100 {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
  }

  &.header-200 {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  }

  &.header-300 {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
  }

  &.header-400 {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 700;
  }

  &.header-500 {
    font-size: 1.5rem;
    line-height: 2.25rem;
    font-weight: 700;
  }

  &.header-600 {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 700;
  }

  &.header-700 {
    font-size: 2.5rem;
    line-height: 3.75rem;
    font-weight: 700;
  }

  &.header-800 {
    font-size: 3.5rem;
    line-height: 5.25rem;
    font-weight: 700;
  }

  &.header-900 {
    font-size: 4.5rem;
    line-height: 6.75rem;
    font-weight: 700;
  }
`;

export const Container = styled(GenericComponent)``;
