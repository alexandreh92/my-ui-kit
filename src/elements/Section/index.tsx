import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Section = ({ children, ...props }: SectionProps) => {
  return <Container {...props}>{children}</Container>;
};

export default Section;
