import React from 'react';

import { ButtonProps } from '../../Button';
import { Button } from './styles';

export interface StickyCardActionProps extends ButtonProps {
  actionText?: string;
  actionDisabled?: boolean;
  onActionClick?: () => void;
}

const Action = ({
  actionText,
  actionDisabled,
  onActionClick,
  ...props
}: StickyCardActionProps) => {
  return (
    <Button
      mode="text"
      disabled={actionDisabled}
      onClick={onActionClick}
      {...props}
    >
      {actionText}
    </Button>
  );
};

export default Action;
