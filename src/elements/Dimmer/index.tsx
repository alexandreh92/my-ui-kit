import React from 'react';

import clsx from 'clsx';

import { Container } from './styles';

export interface DimmerProps {
  page?: boolean;
  children?: React.ReactNode;
  inverted?: boolean;
  className?: string;
}

const Dimmer = ({ page, inverted, className, children }: DimmerProps) => {
  return (
    <Container
      className={clsx(page && 'page', inverted && 'inverted', className)}
    >
      {children}
    </Container>
  );
};

export default Dimmer;
