import React from 'react';

import { CommonComponentProps } from '../../@types';
import Icon, { IconName } from '../../addons/Icon';
import { Container, Content, Title, Label, Meta } from './styles';

export interface MetaLabelProps extends CommonComponentProps {
  label?: string;
  bottomLabel?: string;
  icon: IconName;
  title?: string;
}

const MetaLabel = ({
  label = '',
  bottomLabel = '',
  icon,
  title = '',
  ...props
}: MetaLabelProps) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Content>
        <Icon icon={icon} />
        <div>
          <Label>{label}</Label>
          {bottomLabel && <Meta>{bottomLabel}</Meta>}
        </div>
      </Content>
    </Container>
  );
};

export default MetaLabel;
