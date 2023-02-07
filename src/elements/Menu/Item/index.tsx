import React, { useCallback } from 'react';

import clsx from 'clsx';

import { Container, Badge } from './styles';
import Icon, { IconName } from '../../../addons/Icon';

export interface MenuItem {
  name?: string;
  value: string | number;
  active?: boolean;
  badged?: boolean;
  icon?: IconName;
  badgeCount?: number | string;
  onClick?: (name?: string) => void;
}

export interface MenuItemProps extends MenuItem {
  children?: React.ReactNode;
}

const MenuItem = ({
  name,
  value,
  active,
  badged,
  icon,
  badgeCount = 0,
  onClick,
  children,
}: MenuItemProps) => {
  /* Callbacks */
  const handleOnItemClick = useCallback(() => {
    onClick && onClick(name);
  }, [onClick, name]);

  return (
    <Container
      className={clsx(
        'item',
        active && 'active',
        icon && 'icon',
        badged && 'badged'
      )}
      onClick={handleOnItemClick}
    >
      {children || (
        <>
          {icon && <Icon icon={icon} />}
          {value}
          {badged && <Badge className={clsx('badge')}>{badgeCount}</Badge>}
        </>
      )}
    </Container>
  );
};

export default MenuItem;
