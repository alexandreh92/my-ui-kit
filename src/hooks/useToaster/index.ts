import { useContext, useMemo } from 'react';

import { ToastContext, AddToast } from '../../contexts/ToastContext';

export type UseToasterReturn = {
  notify: AddToast;
};

export type UseToaster = {
  (): UseToasterReturn;
};

const useToaster: UseToaster = () => {
  const { addToast } = useContext(ToastContext);

  const values = useMemo(() => ({ notify: addToast }), [addToast]);

  return values;
};

export default useToaster;
