import React from 'react';

import { useTheme } from 'styled-components';

import { CommonComponentProps } from '../../../@types';
import Icon from '../../../addons/Icon';
import Heading from '../../Heading';
import { Container, IconContainer } from './styles';

export interface ModalHeaderProps extends CommonComponentProps {
  onCloseClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const ModalHeader = ({
  onCloseClick,
  title,
  children,
  ...props
}: ModalHeaderProps) => {
  const theme = useTheme();

  const handleOnCloseClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    onCloseClick && onCloseClick(e);
  };

  return (
    <Container {...props}>
      {children || (
        <>
          <Heading weight="header-600">{title}</Heading>
          <IconContainer onClick={handleOnCloseClick}>
            <Icon icon="close" size={2} color={theme.colors.gray[700]} />
          </IconContainer>
        </>
      )}
    </Container>
  );
};

export default ModalHeader;
