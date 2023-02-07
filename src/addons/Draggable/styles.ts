import styled from 'styled-components';

export const Container = styled.div`
  &.dragging {
    border: 2px dashed rgba(0, 0, 0, 0.2);

    background: transparent;

    box-shadow: none;

    cursor: grabbing;
  }
`;
