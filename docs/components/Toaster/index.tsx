import React from 'react';

import useToaster from '../../../src/hooks/useToaster';
import Button from '../../../src/elements/Button';

const Toaster = () => {
  const { notify } = useToaster();

  return (
    <Button
      onClick={() => notify({ message: 'Some Message', title: 'Some Title' })}
    >
      Show Notification
    </Button>
  );
};

export default Toaster;
