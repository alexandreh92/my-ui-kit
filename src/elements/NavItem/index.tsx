import React, { HTMLAttributes } from 'react';

import clsx from 'clsx';

import { Container, ItemContainer, ContentContainer } from './styles';
import Icon, { IconName } from '../../addons/Icon';

export interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  text: string;
  active?: boolean;
}

const NavItem = ({ icon, text, active, className, ...props }: NavItemProps) => {
  return (
    <Container className={clsx(className, active && 'active')} {...props}>
      <ItemContainer>{icon ? <Icon icon={icon} /> : <></>}</ItemContainer>
      <ContentContainer>{text}</ContentContainer>
    </Container>
  );
};

export default NavItem;
