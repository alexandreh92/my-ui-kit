import styled from 'styled-components';

import Heading from '../Heading';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  padding: 0 0.875rem 0 1.375rem;

  height: 3.25rem;
  width: auto;
  min-width: 10.625rem;

  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray[1200]};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.gray[1100]} !important;

  & svg {
    fill: ${({ theme }) => theme.colors.gray[1100]};
    min-height: 1.5rem;
    min-width: 1.5rem;
  }

  & > div {
    display: flex;
    flex-direction: column;

    margin-left: 0.875rem;
  }
`;

export const Title = styled(Heading).attrs({ weight: 'header-200' })`
  color: ${({ theme }) => theme.colors.gray[1200]};

  margin-bottom: 0.5rem;
`;

export const Label = styled(Heading).attrs({ weight: 'header-300' })``;

export const Meta = styled(Heading).attrs({ weight: 'body-small' })`
  font-size: 0.5rem !important;
  color: ${({ theme }) => theme.colors.gray[500]} !important;
`;
