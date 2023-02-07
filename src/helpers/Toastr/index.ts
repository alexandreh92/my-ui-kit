import { createRef } from 'react';

import { AddToast, ToastProviderHandles } from '../../contexts/ToastContext';

export const toastrRef = createRef<ToastProviderHandles>();

const notify: AddToast = (notifyProps) => {
  toastrRef.current?.addToast(notifyProps);
};

export default { notify };
