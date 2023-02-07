import styled from 'styled-components';

import DefaultButton from '../../Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 39px 43px;

  & div {
    margin: 0 9px;
  }
`;

type ButtonOverrides = {
  width?: number;
};

export const Button = styled(DefaultButton)<ButtonOverrides>`
  width: ${({ width }) => width}rem;
`;
