import styled from 'styled-components';

import Heading from '../Heading';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  & > div:first-of-type {
    margin-bottom: 1.625rem;
    text-align: left;
  }

  & > div:last-of-type {
    margin-top: 1rem;
    text-align: left;
  }

  &.centered {
    align-items: center;

    & > div:first-of-type,
    & > div:last-of-type {
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  &.centered {
    justify-content: center;
  }

  div {
    margin: 0 0.75rem;
  }

  @media screen and (max-width: 22.5rem) {
    div {
      margin: 0 0.125rem;
    }
  }

  @media screen and (min-width: 22.5rem) and (max-width: 48rem) {
    div {
      margin: 0 0.25rem;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 1.625rem;

  span {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
  }
`;

export const Label = styled(Heading)``;
