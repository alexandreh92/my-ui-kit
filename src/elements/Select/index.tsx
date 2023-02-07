import React, {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

import clsx from 'clsx';

import { Size } from '../../@types';
import { Container, Content, Selected, Items } from './styles';
import InputWrapper from '../../components/InputWrapper';

export interface SelectDataElement {
  value: string | number;
  label: string | number;
}

export interface SelectProps
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  data: SelectDataElement[];
  size?: Size;
  label?: string;
  disabled?: boolean;
  caption?: string;
  error?: boolean | string;
  placeholder?: string;
  shouldOmitCaptions?: boolean;
  onOptionClick: (option: SelectDataElement) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      data = [],
      size = 'medium',
      label,
      caption,
      disabled,
      error,
      placeholder = 'Selecione uma opção',
      className,
      value,
      shouldOmitCaptions,
      onChange,
      onOptionClick,
      ...props
    },
    ref
  ) => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const dropDownRef = useRef(null);

    const selected = data.find((i) => i.value === value);

    const inputWrapperProps = {
      size,
      label,
      caption,
      error,
      disabled,
      shouldOmitCaptions,
    };

    const OutsideListner = (dropdownRef: any) => {
      const handleClickOutside = (event: any) => {
        if (
          dropdownRef.current &&
          dropdownActive &&
          !dropdownRef.current.contains(event.target)
        ) {
          setDropdownActive(false);
        }
      };

      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      });
    };

    OutsideListner(dropDownRef);

    return (
      <Container
        ref={dropDownRef}
        className={clsx(
          className,
          dropdownActive && 'active',
          size,
          disabled && 'disabled',
          error && 'error'
        )}
      >
        <InputWrapper {...inputWrapperProps}>
          <Content onClick={() => setDropdownActive((oldState) => !oldState)}>
            <select
              ref={ref}
              disabled={disabled}
              value={value}
              onChange={onChange}
              {...props}
            >
              {data.map((record) => (
                <option key={record.value} value={record.value}>
                  {record.label}
                </option>
              ))}
            </select>
            <Selected>{selected?.label || <span>{placeholder}</span>}</Selected>
            <Items>
              {data.map((record) => (
                <div
                  key={record.value}
                  className={clsx(value === record.value && 'active')}
                  onClick={() => onOptionClick(record)}
                  onKeyDown={() => undefined}
                  role="option"
                  aria-selected={value === record.value}
                  tabIndex={0}
                >
                  {record.label}
                </div>
              ))}
            </Items>
          </Content>
        </InputWrapper>
      </Container>
    );
  }
);

export default Select;
