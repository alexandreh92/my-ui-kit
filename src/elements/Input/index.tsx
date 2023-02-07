import React, {
  forwardRef,
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from 'react';

import cx from 'clsx';
import clsx from 'clsx';

import { IconPosition, Size } from '../../@types';
import { Container, Content, TInput, IconContainer } from './styles';
import InputWrapper from '../../components/InputWrapper';
import Icon, { IconName } from '../../addons/Icon';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: IconName;
  iconPosition?: IconPosition;
  label?: string;
  caption?: string;
  error?: string;
  size?: Size;
  shouldOmitCaptions?: boolean;
  onActionClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      icon,
      label,
      caption,
      error,
      className,
      disabled,
      iconPosition,
      shouldOmitCaptions,
      size = 'medium',
      type = 'text',
      ...props
    },
    ref
  ) => {
    const inputWrapperProps = {
      shouldOmitCaptions,
      size,
      label,
      error,
      caption,
      disabled,
    };

    const isSecureText = useMemo(() => type === 'password', [type]);

    const [hide, showHide] = useState(isSecureText);

    const inputType = useMemo(() => (hide ? 'password' : 'text'), [hide]);
    const secureIconName = useMemo(() => (hide ? 'lock' : 'unlock'), [hide]);
    const shouldRenderIcon = useMemo(
      () => isSecureText || icon,
      [icon, isSecureText]
    );
    const iconClassName = useMemo(
      () => (iconPosition === 'right' ? 'icon-right' : 'icon-left'),
      [iconPosition]
    );

    const handleOnIconClick = useCallback(() => {
      if (!isSecureText) return;

      showHide((oldState) => !oldState);
    }, [isSecureText]);

    return (
      <Container className={cx(className, size)}>
        <Content>
          <InputWrapper {...inputWrapperProps}>
            <TInput
              type={inputType}
              {...props}
              ref={ref}
              disabled={disabled}
              className={cx(
                error && 'error',
                shouldRenderIcon && iconClassName
              )}
            />
            {shouldRenderIcon && (
              <IconContainer
                className={clsx(isSecureText && 'clickable', 'icon')}
                onClick={handleOnIconClick}
              >
                <Icon icon={isSecureText ? secureIconName : icon} />
              </IconContainer>
            )}
          </InputWrapper>
        </Content>
      </Container>
    );
  }
);

export default Input;
