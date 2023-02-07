import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Badge = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 1.25rem;

  background: ${({ theme }) => theme.colors.alert[400]};

  font-size: 0.625rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.white};

  top: 0;
  right: 0;
`;
