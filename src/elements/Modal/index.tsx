import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Content } from './styles';
import ModalHeader from './ModalHeader';
import Portal, { PortalHandles } from '../../addons/Portal';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';
import { ButtonProps } from '../Button';
import Dimmer from '../Dimmer';

export interface ModalProps {
  title?: string;
  content?: string;
  contentMeta?: string;
  closeOnDimmerClick?: boolean;
  trigger?: React.ReactElement<any>;
  actions?: ActionProps[];
  onSuccessLabel?: string;
  onCancelLabel?: string;
  defaultOpen?: boolean;
  isOpen?: boolean;
  children?: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  onMount?: () => any;
  onUnmount?: () => any;
  onSuccessClick?: () => void;
  onCancelClick?: () => void;
}

export interface ActionProps extends Omit<ButtonProps, 'onClick'> {
  onClick?: (e?: any) => any;
  label: string;
  width?: number;
}

export interface ModalHandles {
  handleOpen: () => void;
  handleClose: () => void;
  handleMount: () => void;
  handleUnmount: () => void;
}

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    ModalProps & React.RefAttributes<ModalHandles>
  > {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Actions: typeof ModalActions;
}

export const Modal = forwardRef<ModalHandles, ModalProps>(
  (
    {
      title = '',
      content = '',
      contentMeta,
      closeOnDimmerClick = true,
      trigger,
      actions,
      onSuccessLabel,
      onCancelLabel,
      defaultOpen,
      isOpen,
      children,
      onClose,
      onOpen,
      onMount,
      onUnmount,
      onSuccessClick,
      onCancelClick,
    },
    ref
  ) => {
    const [open, setOpen] = useState(defaultOpen);

    const portalRef = useRef<PortalHandles>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const defaultActions: ActionProps[] = useMemo(
      () => [
        {
          label: onCancelLabel || 'Cancelar',
          variant: 'tertiary',
          onClick: onCancelClick,
          width: 9.25,
        },
        {
          label: onSuccessLabel || 'Confirmar',
          variant: 'primary',
          onClick: onSuccessClick,
          width: 17.375,
        },
      ],
      [onCancelClick, onCancelLabel, onSuccessClick, onSuccessLabel]
    );

    const handleClose = () => {
      onClose && onClose();

      setOpen(false);
    };

    const handleActionOverrides = (callback?: () => void) => {
      handleClose();

      if (callback) callback();
    };

    const modalActions = (actions || defaultActions).map((action) => ({
      ...action,
      onClick: () => handleActionOverrides(action.onClick),
    }));

    const handleOpen = useCallback(() => {
      onOpen && onOpen();

      setOpen(true);
    }, [onOpen]);

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(e.target as HTMLElement) &&
        closeOnDimmerClick
      ) {
        handleClose();
      }
    };

    const handleMount = () => {
      onMount && onMount();
      document.addEventListener('mousedown', handleOutsideClick);
    };

    const handleUnmount = () => {
      onUnmount && onUnmount();
      document.removeEventListener('mousedown', handleOutsideClick);
    };

    useEffect(() => {
      if (isOpen) {
        handleOpen();
      }
    }, [isOpen, handleOpen]);

    useImperativeHandle(ref, () => ({
      handleClose,
      handleOpen,
      handleMount,
      handleUnmount,
    }));

    return (
      <Portal
        ref={portalRef}
        isOpen={open}
        onOpen={handleOpen}
        onClose={handleClose}
        trigger={trigger}
        onMount={handleMount}
        onUnmount={handleUnmount}
        wrapperId="modal-wrapper"
      >
        <Dimmer page inverted>
          <Content ref={contentRef}>
            {children || (
              <>
                <ModalHeader title={title} onCloseClick={handleClose} />
                <ModalContent meta={contentMeta} content={content} />
                <ModalActions actions={modalActions} />
              </>
            )}
          </Content>
        </Dimmer>
      </Portal>
    );
  }
) as CompoundedComponent;

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Actions = ModalActions;

export default Modal;
