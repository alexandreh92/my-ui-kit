import React, { HTMLAttributes } from 'react';

import cx from 'clsx';

import { BlankStatePaddingSize } from '../../@types';
import { Container, Title, Description, Action } from './styles';
import Icon, { IconName } from '../../addons/Icon';

export interface BlankStateProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  icon: IconName;
  iconColor?: string;
  title: string;
  description: string;
  actionText?: string;
  paddingMode?: BlankStatePaddingSize;
  onActionClick?: () => void;
}

const BlankState = ({
  icon,
  iconColor,
  title,
  description,
  actionText,
  paddingMode = 'big',
  onActionClick,
  children,
  className,
  ...props
}: BlankStateProps) => {
  if (children) {
    return <Container {...props}>{children}</Container>;
  }

  return (
    <Container className={cx(className, paddingMode)} {...props}>
      {icon && <Icon icon={icon} size={4.125} color={iconColor} />}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Action onClick={onActionClick}>{actionText}</Action>
    </Container>
  );
};

BlankState.Title = Title;
BlankState.Description = Description;
BlankState.Action = Action;

export default BlankState;
