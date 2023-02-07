import React from 'react';

import Icon, { IconName } from '../../addons/Icon';
import Heading from '../Heading';
import Button from '../Button';
import {
  Container,
  IconContainer,
  ContentContainer,
  Text,
  ButtonContainer,
} from './styles';
import { CommonComponentProps } from '../../@types';

export interface StepCardProps extends CommonComponentProps {
  title: string;
  text: string;
  icon: IconName;
  buttonIcon?: IconName;
  buttonText?: string;
  onButtonPress?: () => void;
}

const StepCard = ({
  title,
  text,
  icon,
  buttonIcon,
  buttonText,
  onButtonPress,
  ...props
}: StepCardProps) => {
  return (
    <Container {...props}>
      <IconContainer>
        <Icon icon={icon} />
      </IconContainer>

      <ContentContainer>
        <Heading weight="header-300">{title}</Heading>
        <Text weight="body-medium">{text}</Text>
        <ButtonContainer>
          {buttonText && (
            <Button mode="text" onClick={onButtonPress}>
              {buttonText}
              {buttonIcon && <Icon icon={buttonIcon} />}
            </Button>
          )}
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
};

export default StepCard;
