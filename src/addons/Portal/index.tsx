import React, {
  forwardRef,
  MouseEventHandler,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import PortalInner from './PortalInner';

export interface PortalHandles {
  close: () => void;
}

export interface PortalProps {
  wrapperId: string;
  children: React.ReactNode;
  trigger?: React.ReactElement<any>;
  isOpen?: boolean;
  openOnTriggerFocus?: boolean;
  mountNode?: HTMLElement;
  shouldPersistNode?: boolean;
  supressTriggerClick?: boolean;
  onOpen?: MouseEventHandler<any>;
  onClose?: MouseEventHandler<any>;
  onFocus?: MouseEventHandler<any>;
  onMount?: () => void;
  onUnmount?: () => void;
}

const Portal = forwardRef(
  (
    {
      wrapperId,
      trigger,
      children,
      isOpen,
      openOnTriggerFocus,
      mountNode,
      shouldPersistNode,
      supressTriggerClick,
      onClose,
      onOpen,
      onFocus,
      onMount,
      onUnmount,
    }: PortalProps,
    ref
  ) => {
    const [open, setOpen] = useState(isOpen && typeof window !== undefined);

    /* Callbacks */

    const close = () => {
      setOpen(false);
    };

    const handleOpen: React.MouseEventHandler<any> = (e) => {
      onOpen && onOpen(e);

      setOpen(true);
    };

    const handleClose: React.MouseEventHandler<any> = (e) => {
      onClose && onClose(e);

      setOpen(false);
    };

    const handleTriggerClick: React.MouseEventHandler<any> = (e) => {
      if (supressTriggerClick) return;
      if (trigger?.props?.onClick) trigger.props.onClick(e);

      if (!open) {
        handleOpen(e);
        return;
      }

      handleClose(e);
    };

    const handleMount = useCallback(() => {
      onMount && onMount();
    }, [onMount]);

    const handleUnmount = useCallback(() => {
      onUnmount && onUnmount();
    }, [onUnmount]);

    const handleTriggerFocus: React.MouseEventHandler<any> = (e) => {
      onFocus && onFocus(e);

      if (!openOnTriggerFocus) return;

      handleOpen(e);
    };

    useEffect(() => {
      setOpen(isOpen);
    }, [isOpen]);

    useImperativeHandle(ref, () => ({
      close,
    }));

    return (
      <>
        {open && (
          <PortalInner
            onMount={handleMount}
            onUnmount={handleUnmount}
            mountNode={mountNode}
            wrapperId={wrapperId}
            shouldPersistNode={shouldPersistNode}
          >
            {children}
          </PortalInner>
        )}
        {trigger &&
          React.cloneElement(trigger, {
            onClick: handleTriggerClick,
            onFocus: handleTriggerFocus,
          })}
      </>
    );
  }
);

export default Portal;
