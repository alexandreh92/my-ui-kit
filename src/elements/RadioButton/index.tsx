import React, { forwardRef, InputHTMLAttributes } from 'react';
import cx from 'clsx';

import { Size, PositionType } from '../../@types';

import {
  Container,
  Content,
  Label,
  Checkradio,
  Caption,
  Error,
} from './styles';

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  labelPosition?: PositionType;
  size?: Size;
  caption?: string;
  error?: string | boolean;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      name,
      label,
      labelPosition = 'right',
      size = 'small',
      caption,
      error,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <Container className={cx(className, size, error && 'error')}>
        <Content className={cx(size, labelPosition)}>
          <input
            ref={ref}
            {...props}
            id={name}
            name={name}
            type="radio"
            hidden
            disabled={disabled}
          />
          {label && <Label className={cx(size)}>{label}</Label>}
          <Checkradio size={size} />
        </Content>
        {caption && !error && (
          <Caption className={cx(size)} disabled={disabled}>
            {caption}
          </Caption>
        )}
        {error && <Error className={size}>{error}</Error>}
      </Container>
    );
  }
);

export default RadioButton;
