import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.625rem;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: min-content;
  grid-gap: 0.375rem 0;

  height: 100%;

  overflow-y: auto;
`;
