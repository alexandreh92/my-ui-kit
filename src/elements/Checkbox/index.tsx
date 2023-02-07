import React, { forwardRef, InputHTMLAttributes } from 'react';

import cx from 'clsx';

import { Size } from '../../@types';
import { Container, Content, Label, Checkmark } from './styles';
import InputWrapper from '../../components/InputWrapper';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: Size;
  caption?: string;
  error?: string | boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      size = 'medium',
      caption,
      error,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const classNames = cx(className, error && 'error');

    const inputWrapperProps = { size, caption, error, disabled };

    return (
      <Container className={classNames}>
        <InputWrapper padded {...inputWrapperProps}>
          <Content className={cx(size)}>
            <input
              ref={ref}
              id={id}
              type="checkbox"
              disabled={disabled}
              {...props}
            />
            {label && <Label htmlFor={id}>{label}</Label>}
            <Checkmark />
          </Content>
        </InputWrapper>
      </Container>
    );
  }
);

export default Checkbox;
