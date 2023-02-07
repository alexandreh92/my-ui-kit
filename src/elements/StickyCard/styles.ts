import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};

  padding: 1.5rem;

  border-radius: 1rem;

  width: 15.25rem;

  box-shadow: 0px 4px 8px -4px rgba(26, 26, 26, 0.2);

  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;
