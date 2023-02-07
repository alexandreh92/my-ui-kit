import React, { HTMLAttributes } from 'react';

import clsx from 'clsx';

import { HeadingMode } from '../../@types';
import { Wrapper, Container } from './styles';

export interface HeadingProps extends HTMLAttributes<any> {
  weight?: HeadingMode;
  renderAs?: string;
  children: React.ReactNode;
}

const Heading = ({
  weight = 'header-500',
  children,
  className,
  ...props
}: HeadingProps) => {
  return (
    <Wrapper className={clsx(className, weight)}>
      <Container {...props}>{children}</Container>
    </Wrapper>
  );
};

export default Heading;
