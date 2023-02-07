import React, { forwardRef, InputHTMLAttributes, useMemo } from 'react';

import clsx from 'clsx';

import RadioButton from '../RadioButton';
import { range } from '../../utils/range';
import { Container, Content, Label } from './styles';
import InputWrapper from '../../components/InputWrapper';
import { Size } from '../../@types';
import { handleCaptionSize } from '../../utils/components/handleCaptionSize';

export interface ScalaProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
  centered: boolean;
  name: string;
  register?: (name: string) => any;
  size?: Size;
  caption?: string;
  error?: string | boolean;
}

const Scala = forwardRef(
  (
    {
      label,
      name,
      min,
      max,
      minLabel,
      maxLabel,
      centered,
      size = 'medium',
      caption,
      error,
      register,
    }: ScalaProps,
    _ref
  ) => {
    const items = React.useMemo(() => {
      const valueRange = range(min, max);

      return valueRange.map((val) => (
        <RadioButton
          key={`scala_item_${val}`}
          labelPosition="top"
          size={size}
          label={val.toString()}
          name={name}
          value={val}
          error={!!error}
          {...(register ? register(name) : undefined)} // tweak for react-hook-forms
        />
      ));
    }, [min, max, name, register, size, error]);

    const labelSize = useMemo(() => handleCaptionSize(size), [size]);

    const classNames = useMemo(() => clsx(centered && 'centered'), [centered]);
    const inputWrapperProps = { label, size, caption, error };

    return (
      <Container className={classNames}>
        <InputWrapper {...inputWrapperProps}>
          <Content className={classNames}>
            <Label weight={labelSize}>{minLabel}</Label>
            {items}
            <Label weight={labelSize}>{maxLabel}</Label>
          </Content>
        </InputWrapper>
      </Container>
    );
  }
);

export default Scala;
