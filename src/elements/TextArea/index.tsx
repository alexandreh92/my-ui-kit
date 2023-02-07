import React, { forwardRef, TextareaHTMLAttributes } from 'react';

import cx from 'clsx';

import Button from '../Button';
import { Container, TTextArea } from './styles';
import InputWrapper from '../../components/InputWrapper';
import { Size } from '../../@types';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string | boolean;
  labelButton?: string;
  label?: string;
  enableButton?: boolean;
  onSave?: any;
  caption?: string;
  size?: Size;
  height?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      caption,
      size = 'medium',
      disabled,
      error,
      labelButton,
      label,
      enableButton,
      onSave,
      ...props
    },
    ref
  ) => {
    const inputWrapperProps = { size, label, error, caption, disabled };

    return (
      <InputWrapper {...inputWrapperProps}>
        <Container>
          <TTextArea
            {...props}
            ref={ref}
            disabled={disabled}
            enableButton={enableButton}
            className={cx(error && 'error', className)}
          />
          <div>
            <Button type="button" onClick={onSave}>
              {labelButton}
            </Button>
          </div>
        </Container>
      </InputWrapper>
    );
  }
);

export default TextArea;
