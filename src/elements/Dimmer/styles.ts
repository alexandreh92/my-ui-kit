import styled from 'styled-components';

export const Container = styled.div`
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.85);

  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  &.page {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  backdrop-filter: blur(2px);

  &.inverted {
    background-color: rgba(0, 0, 0, 0.85);
  }
`;
