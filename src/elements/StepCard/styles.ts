import styled from 'styled-components';

import Heading from '../Heading';

export const Container = styled.div`
  display: flex;

  padding: 1.5rem 1.5rem 0.5rem;

  border-radius: 0.25rem;

  background: ${({ theme }) => theme.colors.white};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 2rem;
  height: 2rem;

  border-radius: 0.25rem;

  background: ${({ theme }) => theme.colors.primary[500]};

  & svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const ContentContainer = styled.div`
  margin-left: 2.125rem;
`;

export const Text = styled(Heading)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ButtonContainer = styled.div`
  margin-top: 0.25rem;

  min-height: 0.75rem;

  & > button {
    justify-content: flex-start;
  }

  & svg {
    fill: ${({ theme }) => theme.colors.primary[500]};
    width: 0.875rem;
    height: 0.875rem;

    margin-left: 0.313rem;
  }
`;
