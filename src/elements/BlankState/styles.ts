import styled from 'styled-components';

import Button from '../Button';
import Heading from '../Heading';
import Section from '../Section';

export const Container = styled(Section)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  border-radius: 1rem;

  & svg {
    fill: ${({ theme }) => theme.colors.gray[400]};
  }

  &.big {
    padding: 4.375rem 10% 7.5rem;

    & svg {
      height: 4.25rem;
    }
  }

  &.medium {
  }

  &.small {
  }
`;

export const Title = styled(Heading).attrs(() => ({
  weight: 'header-400',
}))`
  margin: 1.25rem 0 0.375rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const Description = styled(Heading).attrs(() => ({
  weight: 'header-300',
}))`
  margin-bottom: 1.563rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const Action = styled(Button).attrs(() => ({
  mode: 'text',
  variant: 'primary',
}))`
  text-decoration: underline;
`;
