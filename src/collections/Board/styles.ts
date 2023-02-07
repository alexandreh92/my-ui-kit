import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-auto-flow: column;
  grid-auto-columns: 15.5rem;
  grid-gap: 0 1.875rem;

  height: 100%;

  overflow-x: auto;
  overflow-y: none;
`;
