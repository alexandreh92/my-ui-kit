import styled from 'styled-components';

import Heading from '../../elements/Heading';

export const Container = styled.div`
  position: relative;

  width: 100%;
`;

export const Label = styled(Heading)`
  color: ${({ theme }) => theme.colors.gray[700]};

  &.small {
    margin-bottom: 0.25rem;
  }

  &.medium {
    margin-bottom: 0.5rem;
  }

  &.large {
    margin-bottom: 0.5rem;
  }

  &.disabled {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const Caption = styled(Heading)`
  color: ${({ theme }) => theme.colors.gray[600]};

  &.small {
    margin-top: 0.25rem;
    min-height: 1rem;

    &.padded {
      margin-left: 1.25rem;
    }
  }

  &.medium {
    margin-top: 0.5rem;
    min-height: 1.25rem;

    &.padded {
      margin-left: 1.5rem;
    }
  }

  &.large {
    margin-top: 0.5rem;
    min-height: 1.5rem;

    &.padded {
      margin-left: 1.875rem;
    }
  }

  &.error {
    color: ${({ theme }) => theme.colors.alert[500]};
  }

  &.disabled {
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
