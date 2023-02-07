import styled from 'styled-components';

import { Heading, Icon } from '../../..';

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.gray[100]};

  border-radius: 0.25rem;

  width: 100%;
  height: 7.875rem;

  overflow: hidden;
`;

export const Line = styled.div`
  width: 0.625rem;
  height: 100%;

  background: ${({ theme }) => theme.colors.primary[600]};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.75rem 1.25rem 0.75rem 0.5rem;
`;

export const Title = styled(Heading).attrs({ weight: 'header-100' })``;

export const DueContainer = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 0.5rem;
  }

  &.overdued {
    & > svg,
    & > div {
      fill: red;
      color: red;
    }
  }
`;

export const CalendarIcon = styled(Icon).attrs({
  icon: 'calendar',
  size: 1,
})`
  fill: ${({ theme }) => theme.colors.gray[400]};
`;

export const DueDate = styled(Heading).attrs({ weight: 'header-100' })`
  color: ${({ theme }) => theme.colors.gray[400]};
`;
