import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 0.875rem;
  line-height: 20px;
  text-transform: capitalize;

  & svg {
    width: 14px;
    color: ${({ theme }) => theme.colors.gray[600]};
    margin: 0 8px;
  }

  & span {
    display: flex;
  }

  &:not(:last-child) {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;
