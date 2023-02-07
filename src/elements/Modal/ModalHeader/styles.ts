import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px 30px;

  border-bottom: 3.25px solid ${({ theme }) => theme.colors.gray[1000]};
  color: ${({ theme }) => theme.colors.gray[700]};

  height: 100px;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;
