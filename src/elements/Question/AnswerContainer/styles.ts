import styled from 'styled-components';

import TextArea from '../../TextArea';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;

  padding: 0 1.125rem 1.375rem 3.125rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 3.75rem 1rem 2.5rem;

  border-radius: 1rem;

  background: ${({ theme }) => theme.colors.gray[100]};

  border-width: 0.063rem;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.white};

  &.active {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Text = styled(TextArea)`
  width: 100%;
  overflow: hidden;

  padding: 0;
  margin-top: 0.875rem;

  border: none;
  border-radius: 0;

  background: transparent;

  resize: none;

  &:focus {
    border: none;
  }

  line-height: 1.313rem;
  font-size: 0.875rem;

  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;

  margin-left: 0.625rem;
  margin-top: 2rem;

  & > button {
    width: auto;
  }
`;
