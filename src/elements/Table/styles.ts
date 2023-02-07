import styled from 'styled-components';

export const TTable = styled.table`
  margin: 0;
  padding: 0;

  border-collapse: separate;
  position: relative;
  table-layout: fixed;
  width: 100%;

  & tr:nth-child(odd) {
    background-color: #f3f4f6;
  }
`;
