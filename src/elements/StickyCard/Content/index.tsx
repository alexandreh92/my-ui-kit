import React from 'react';
import { HeadingProps } from '../../Heading';

import { Container } from './styles';

export interface StickyCardContentProps extends Omit<HeadingProps, 'children'> {
  children?: string;
}

const Content = ({ children, ...props }: StickyCardContentProps) => {
  return (
    <Container weight="body-large" {...props}>
      {children}
    </Container>
  );
};

export default Content;
