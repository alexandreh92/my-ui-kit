import React, { useMemo } from 'react';

import clsx from 'clsx';

import { Size } from '../../@types';
import { Container } from './styles';

const spinnerSizes = ['big', 'extra-large'] as const;

type SpinnerSize = typeof spinnerSizes[number] | Size;

export interface SpinnerProps {
  size?: SpinnerSize;
  inline?: boolean;
  className?: string;
}

const Spinner = ({ size = 'medium', inline, className }: SpinnerProps) => {
  const classNames = useMemo(
    () => clsx(size, inline && 'inline', className, 'spinner'),
    [size, inline, className]
  );

  return <Container className={classNames} />;
};

export default Spinner;
