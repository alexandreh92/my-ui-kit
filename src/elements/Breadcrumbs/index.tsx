import React, { InputHTMLAttributes } from 'react';

import cx from 'clsx';

import { Size } from '../../@types';
import { Container, Content, Ul, Li } from './styles';
import Icon from '../../addons/Icon';

export interface BreadcrumbsProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size;
  data: string[];
}

const BreadcrumbItem = ({ text = 'string', showSeparator = true }) => (
  <Li>
    {showSeparator ? <Icon icon="chevron-right" /> : null}
    <span>{text}</span>
  </Li>
);

const Breadcrumbs = ({ size = 'medium', data = [] }: BreadcrumbsProps) => {
  const sizeClass = cx(size);
  const [first, ...others] = data;

  return (
    <Container>
      <Content className={sizeClass}>
        <Ul>
          <BreadcrumbItem text={first} showSeparator={false} />
          {others?.map((item) => (
            <BreadcrumbItem key={`breadcrumb_${item}`} text={item} />
          ))}
        </Ul>
      </Content>
    </Container>
  );
};

export default Breadcrumbs;
