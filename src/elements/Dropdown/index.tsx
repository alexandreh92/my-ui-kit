import React, { useRef, useCallback, useState, useEffect } from 'react';

import _ from 'lodash';
import { v4 as uuid } from 'uuid';

import Portal, { PortalHandles } from '../../addons/Portal';
import { handleDropdownPosition } from '../../helpers/Dropdown/handleDropdownPosition';
import { Content } from './styles';

const dropdownPositions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
] as const;

export type DropdownPositionMode = typeof dropdownPositions[number];

export interface DropdownProps {
  children: React.ReactNode;
  trigger: React.ReactElement<any>;
  mode?: DropdownPositionMode;
}

const Dropdown = ({
  children,
  trigger,
  mode = 'bottom-left',
}: DropdownProps) => {
  const [contentPosition, setContentPosition] =
    useState<Partial<DOMRect> | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const portalRef = useRef<PortalHandles>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<any>(null);

  const handleContentPosition = useCallback(() => {
    if (
      !triggerRef?.current ||
      !contentRef?.current ||
      typeof window === 'undefined'
    )
      return;

    const position = handleDropdownPosition(triggerRef, contentRef, mode);

    const canSetPosition = !_.isEqual(position, contentPosition);

    // Prevent Infinite Loop on InnerPortal
    if (position && canSetPosition) {
      setContentPosition(position);
    }
  }, [contentPosition, mode]);

  const handleOnTriggerClick = useCallback(() => {
    setOpen((oldState) => !oldState);
  }, []);

  const OutsideListner = (ref: any) => {
    const handleClickOutside = () => {
      if (ref.current && open) {
        setOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  };

  OutsideListner(contentRef);

  return (
    <Portal
      isOpen
      supressTriggerClick
      onMount={handleContentPosition}
      ref={portalRef}
      trigger={
        <div ref={triggerRef}>
          {React.cloneElement(trigger, { onClick: handleOnTriggerClick })}
        </div>
      }
      wrapperId={`dropdown-wrapper-${uuid()}`}
    >
      <Content isOpen={open} position={contentPosition} ref={contentRef}>
        {children}
      </Content>
    </Portal>
  );
};

export default Dropdown;
