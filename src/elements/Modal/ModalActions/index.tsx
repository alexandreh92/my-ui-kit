import React, { PropsWithChildren } from 'react';

import { ActionProps } from '..';

import { CommonComponentProps } from '../../../@types';
import { Container, Button } from './styles';

export interface ModalActionProps extends CommonComponentProps {
  actions?: ActionProps[];
}

const ModalActions = ({
  actions,
  children,
  ...props
}: PropsWithChildren<ModalActionProps>) => {
  return (
    <Container {...props}>
      {children || (
        <>
          {actions?.map((action) => {
            const { label, ...butonProps } = action;

            return (
              <div key={action.label}>
                <Button {...butonProps}>{label}</Button>
              </div>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default ModalActions;
