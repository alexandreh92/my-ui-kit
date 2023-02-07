import React, { useMemo } from 'react';

import IcomoonReact from 'icomoon-react';

import { IconName } from './types';
import iconSet from '../../config/icons/selection.json';

export type { IconName } from './types';

export interface IconProps {
  color?: string;
  size?: number;
  icon?: IconName;
  className?: string;
  style?: React.CSSProperties;
}

const Icon = ({ color, size = 1.25, icon, ...props }: IconProps) => {
  const iconSize = useMemo(() => (size ? `${size}rem` : undefined), [size]);

  if (!icon) {
    return null;
  }

  return (
    <IcomoonReact
      iconSet={iconSet}
      icon={icon}
      color={color}
      size={iconSize}
      {...props}
    />
  );
};

export default Icon;
