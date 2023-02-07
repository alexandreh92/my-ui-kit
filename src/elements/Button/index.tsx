import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

import cx from 'clsx';

import {
  Size,
  Variant,
  ButtonMode,
  ButtonElement,
  IconPosition,
} from '../../@types';
import { Container, Loading } from './styles';
import Icon, { IconName } from '../../addons/Icon';

type ButtonType =
  | ButtonHTMLAttributes<HTMLButtonElement> & HTMLAttributes<HTMLDivElement>;

export interface ButtonProps extends ButtonType {
  renderAs?: ButtonElement;
  icon?: IconName;
  size?: Size;
  loading?: boolean;
  variant?: Variant;
  mode?: ButtonMode;
  iconPosition?: IconPosition;
}

const Button = ({
  renderAs = 'button',
  icon,
  size = 'medium',
  variant = 'primary',
  mode = 'default',
  children,
  className,
  disabled,
  loading,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  const classNames = cx(
    className,
    mode,
    size,
    loading && 'loading',
    variant,
    icon && 'icon',
    iconPosition
  );

  return (
    <Container
      {...props}
      disabled={disabled || loading}
      as={renderAs}
      className={classNames}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          {icon && <Icon icon={icon} />}
          <span>{children}</span>
        </>
      )}
    </Container>
  );
};

export default Button;
