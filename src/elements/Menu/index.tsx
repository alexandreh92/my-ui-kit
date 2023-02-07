import React, { useMemo } from 'react';

import { v4 as uuid } from 'uuid';
import clsx from 'clsx';

import { Container } from './styles';
import Item from './Item';
import type { MenuItem } from './Item';
import { MenuMode } from '../../@types';

export interface MenuProps {
  items: MenuItem[];
  mode?: MenuMode;
  className?: string;
  children?: React.ReactNode;
}

const Menu = ({ items, mode = 'vertical', className, children }: MenuProps) => {
  const containerClass = useMemo(
    () => clsx(mode, className),
    [mode, className]
  );

  return (
    <Container className={containerClass}>
      {children || (
        <>
          {items.map((item) => (
            <Item key={uuid()} {...item} />
          ))}
        </>
      )}
    </Container>
  );
};

Menu.Item = Item;

export default Menu;
