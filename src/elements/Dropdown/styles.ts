import styled, { css } from 'styled-components';

export const Content = styled.div<{
  position: Partial<DOMRect> | undefined;
  isOpen: boolean;
}>`
  position: absolute;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      visibility: hidden;
      opacity: 0;
    `}

  ${({ position }) =>
    !position &&
    css`
      display: none;
    `}

  ${({ position }) =>
    position &&
    css`
      top: ${position.top}rem;
      left: ${position.left}rem;
      bottom: ${position.bottom}rem;
      right: ${position.right}rem;
    `}
`;
