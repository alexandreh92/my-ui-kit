import styled from 'styled-components';

import Heading from '../../Heading';

export const Container = styled.div`
  padding: 1.25rem 4.25rem 1.875rem 2.5rem;

  background: ${({ theme }) => theme.colors.gray[100]};

  border-radius: 1rem;
  border-width: 0.063rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Date = styled(Heading).attrs({ weight: 'body-small' })``;

export const Body = styled(Heading).attrs({ weight: 'body-large' })`
  color: ${({ theme }) => theme.colors.gray[600]};

  margin-left: 3.875rem;
  margin-top: 0.75rem;
`;
