import React from 'react';

import Header, { StickyCardHeaderProps } from './Header';
import Content, { StickyCardContentProps } from './Content';
import Action, { StickyCardActionProps } from './Action';
import { Container } from './styles';

export interface StickyCardProps
  extends Pick<StickyCardHeaderProps, 'icon' | 'title' | 'iconColor'>,
    Pick<
      StickyCardActionProps,
      'actionText' | 'actionDisabled' | 'onActionClick'
    > {
  children?: React.ReactNode;
  content?: string;
}

const StickyCard = ({
  title,
  icon,
  content,
  actionText,
  children,
  iconColor,
  actionDisabled,
  onActionClick,
  ...props
}: StickyCardProps) => {
  if (children) {
    return <Container {...props}>{children}</Container>;
  }

  return (
    <Container {...props}>
      <Header {...{ title, icon, iconColor }} />
      <Content>{content}</Content>
      <Action {...{ actionText, actionDisabled, onActionClick }} />
    </Container>
  );
};

StickyCard.Header = Header;
StickyCard.Content = Content;
StickyCard.Action = Action;

export type {
  StickyCardHeaderProps,
  StickyCardContentProps,
  StickyCardActionProps,
};

export default StickyCard;
