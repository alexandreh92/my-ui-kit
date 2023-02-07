import styled from 'styled-components';

export const Td = styled.td`
  overflow: hidden;
  padding: 1rem;

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;

  text-align: left;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;

  border-bottom-color: #ebedf0;
  border-bottom-width: 0.063rem;
  border-bottom-style: solid;

  color: ${({ theme }) => theme.colors.gray[800]};
`;
