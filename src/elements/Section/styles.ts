import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;
  padding: 30px 30px 50px 30px;
  position: relative;
`;
