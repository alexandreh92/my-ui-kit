import React from 'react';

import clsx from 'clsx';

import { Toaster } from '../../@types';
import {
  Badge,
  Container,
  Header,
  HeaderLeft,
  Body,
  HeaderText,
  BodyText,
  Icon,
  IconContainer,
} from './styles';

export { ToastContainer, ToastWrapper } from './styles';
export interface ToastProps
  extends Pick<Toaster, 'title' | 'message' | 'mode'> {
  onClose: () => void;
}

const Toast = ({ title, message, mode = 'success', onClose }: ToastProps) => {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Badge className={clsx(mode)} />
          <HeaderText weight="body-medium">{title}</HeaderText>
        </HeaderLeft>
        <IconContainer onClick={onClose}>
          <Icon icon="close" />
        </IconContainer>
      </Header>
      <Body>
        <BodyText weight="body-medium">{message}</BodyText>
      </Body>
    </Container>
  );
};

export default Toast;
