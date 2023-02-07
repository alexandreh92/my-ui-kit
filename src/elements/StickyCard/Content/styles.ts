import styled from 'styled-components';
import Heading from '../../Heading';

export const Container = styled(Heading)`
  height: 4.875rem;

  display: flex;
  align-items: center;

  & > div {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
