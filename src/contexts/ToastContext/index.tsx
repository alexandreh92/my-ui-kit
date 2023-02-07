import React, {
  createContext,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { v4 as uuid } from 'uuid';
import clsx from 'clsx';

import { Toaster, ToastPosition } from '../../@types';
import Portal from '../../addons/Portal';
import Toast, { ToastContainer, ToastWrapper } from '../../addons/Toast';
import { toastrRef } from '../../helpers/Toastr';

export type ToastContextType = {
  addToast: AddToast;
  dismissAllToasts: () => void;
};

export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType
);

interface ToastProviderProps {
  children?: React.ReactNode;
  defaultDuration: number;
  position: ToastPosition;
}

export type CloseToast = {
  (id: number | string): void;
};

export type AddToastProps = Pick<
  Toaster,
  'message' | 'title' | 'mode' | 'duration' | 'persistent'
>;

export type AddToast = {
  (toastProps: AddToastProps): void;
};

export type ToastProviderHandles = {
  addToast: AddToast;
};

export const ForwardedToastProvider = forwardRef<
  ToastProviderHandles,
  ToastProviderProps
>(({ defaultDuration = 5000, position = 'top-right', children }, ref) => {
  const [toasts, setToasts] = useState<Toaster[]>([]);
  const portalRef = useRef();

  const positionClassName = useMemo(() => clsx(position), [position]);

  const closeToast: CloseToast = useCallback((id) => {
    setToasts((oldToasts) => oldToasts.filter((i) => i.id !== id));
  }, []);

  const addToast: AddToast = useCallback(
    ({ title, duration, mode, message, persistent }) => {
      const toastId = uuid();

      setToasts((oldToasts) => [
        ...oldToasts,
        { id: toastId, title, message, mode, duration },
      ]);

      if (!persistent)
        setTimeout(() => closeToast(toastId), duration || defaultDuration);
    },
    [defaultDuration, closeToast]
  );

  const dismissAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  useImperativeHandle(ref, () => ({
    addToast,
  }));

  const values = useMemo(
    () => ({
      addToast,
      dismissAllToasts,
    }),
    [addToast, dismissAllToasts]
  );

  return (
    <>
      <ToastContext.Provider value={values}>
        {typeof window !== 'undefined' && (
          <Portal ref={portalRef} isOpen wrapperId="toast-wrapper">
            <ToastWrapper className={positionClassName}>
              <ToastContainer>
                {toasts.map((toast) => (
                  <Toast
                    key={toast.id}
                    title={toast.title}
                    message={toast.message}
                    mode={toast.mode}
                    onClose={() => closeToast(toast.id)}
                  />
                ))}
              </ToastContainer>
            </ToastWrapper>
          </Portal>
        )}
        {children}
      </ToastContext.Provider>
    </>
  );
});

export const ToastProvider = ({ children, ...props }: ToastProviderProps) => {
  return (
    <ForwardedToastProvider ref={toastrRef} {...props}>
      {children}
    </ForwardedToastProvider>
  );
};

export default ToastProvider;
