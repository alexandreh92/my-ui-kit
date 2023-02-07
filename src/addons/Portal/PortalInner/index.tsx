import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { createPortal } from 'react-dom';
import { useUpdateEffect } from 'react-use';

export interface PortalInnerProps extends PropsWithChildren<any> {
  mountNode?: HTMLElement;
  wrapperId: string;
  shouldPersistNode?: boolean;
  onMount?: () => void;
  onUnmount?: () => void;
}

const PortalInner = ({
  children,
  mountNode = document.body,
  wrapperId,
  shouldPersistNode,
  onMount,
  onUnmount,
}: PortalInnerProps) => {
  /* Handle Initialization  */

  const [wrapper, setWrapper] = useState(document.getElementById(wrapperId));

  const createWrapper = useCallback(() => {
    const element = document.createElement('div');
    element.setAttribute('id', wrapperId);
    return mountNode.appendChild(element);
  }, [mountNode, wrapperId]);

  const portal = useMemo(() => {
    if (!wrapper || !children) return null;
    return createPortal(children, wrapper);
  }, [children, wrapper]);

  const handleWithWrapper = useCallback(() => {
    if (!document.getElementById(wrapperId)) {
      setWrapper(createWrapper());
    }
  }, [createWrapper, wrapperId]);

  useEffect(() => {
    handleWithWrapper();

    return () => {
      if (wrapper && !shouldPersistNode) wrapper.remove();
    };
  }, [wrapperId, shouldPersistNode, handleWithWrapper, wrapper]);

  useUpdateEffect(() => {
    if (portal && onMount) {
      onMount();
    }
  }, [onMount, wrapper]);

  useEffect(() => {
    return () => {
      onUnmount && onUnmount();
    };
  }, [onUnmount]);

  if (!portal) return null;

  return portal;
};

export default PortalInner;
