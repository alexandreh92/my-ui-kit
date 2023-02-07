import React, { HTMLAttributes } from 'react';

export interface GenericComponentProps extends HTMLAttributes<any> {
  renderAs?: string;
  children: React.ReactNode;
}

const GenericComponent = ({
  renderAs,
  children,
  ...props
}: GenericComponentProps) => {
  const renderType = renderAs || 'div';

  return React.createElement(renderType, props, children);
};

export default GenericComponent;
