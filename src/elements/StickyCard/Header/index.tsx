import React, { HTMLAttributes } from 'react';

import Icon, { IconName } from '../../../addons/Icon';
import Heading from '../../Heading';
import { Container } from './styles';

export interface StickyCardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  icon?: IconName;
  iconColor?: string;
  title?: string;
}

const Header = ({
  title,
  icon,
  iconColor,
  ...props
}: StickyCardHeaderProps) => {
  return (
    <Container {...props}>
      {icon && <Icon icon={icon} color={iconColor} />}
      <Heading weight="header-400">{title}</Heading>
    </Container>
  );
};

export default Header;
