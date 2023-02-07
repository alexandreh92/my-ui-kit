import React, { useMemo } from 'react';

import clsx from 'clsx';

import { Container, Label, Caption } from './styles';
import { Size } from '../../@types';
import { handleLabelSize } from '../../utils/components/handleLabelSize';
import { handleCaptionSize } from '../../utils/components/handleCaptionSize';

interface InputWrapperProps {
  label?: string;
  size: Size;
  disabled?: boolean;
  caption?: string;
  error?: string | boolean;
  children: React.ReactNode;
  padded?: boolean;
  shouldOmitCaptions?: boolean;
}

const InputWrapper = ({
  label,
  size,
  disabled,
  caption,
  error,
  children,
  padded,
  shouldOmitCaptions,
}: InputWrapperProps) => {
  const labelSize = useMemo(() => handleLabelSize(size), [size]);
  const captionSize = useMemo(() => handleCaptionSize(size), [size]);

  return (
    <>
      {label && (
        <Label
          weight={labelSize}
          className={clsx(size, disabled && 'disabled')}
        >
          {label}
        </Label>
      )}
      <Container>{children}</Container>

      {!shouldOmitCaptions && (
        <Caption
          weight={captionSize}
          className={clsx(size, error && 'error', padded && 'padded')}
        >
          {error || caption}
        </Caption>
      )}
    </>
  );
};

export default InputWrapper;
