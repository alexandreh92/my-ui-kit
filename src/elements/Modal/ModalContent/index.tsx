import React, { PropsWithChildren } from 'react';

import { CommonComponentProps } from '../../../@types';
import Heading from '../../Heading';
import { Container, Meta } from './styles';

export interface ModalContentProps extends CommonComponentProps {
  meta?: string;
  content?: string;
}

const ModalContent = ({
  meta,
  content,
  children,
  ...props
}: PropsWithChildren<ModalContentProps>) => {
  return (
    <Container {...props}>
      {children || (
        <>
          {meta && <Meta>{meta}</Meta>}
          {content && <Heading weight="body-large">{content}</Heading>}
        </>
      )}
    </Container>
  );
};

export default ModalContent;
