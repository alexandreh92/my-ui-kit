import clsx from 'clsx';
import React from 'react';
import { Size } from '../../@types';

import { Container } from './styles';

export interface CaptionProps {
  error?: string | boolean;
  caption?: string;
  size: Size;
  renderAs?: string;
}

const Caption = ({ caption, error, ...props }: CaptionProps) => {
  return (
    <Container className={clsx(error && 'error')} {...props}>
      {caption || error}
    </Container>
  );
};

export default Caption;
