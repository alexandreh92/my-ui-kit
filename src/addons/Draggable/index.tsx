/* eslint-disable no-param-reassign */
import React, { useMemo, useRef } from 'react';

import clsx from 'clsx';
import { DropTargetHookSpec, useDrag, useDrop } from 'react-dnd';

import { Container } from './styles';

type DraggableItemType = {
  position: number;
  parentPosition?: number;
  containerRef?: React.RefObject<HTMLDivElement>;
};

type DraggableCollectType = {
  isDragging: boolean;
};

export type OnDropPosition = {
  newPosition: number;
  newParentPosition?: number;
};

export type OnDropHover = DropTargetHookSpec<
  DraggableItemType,
  unknown,
  DraggableCollectType
>['hover'];

export interface DraggableProps {
  children?: React.ReactNode;
  position: number;
  parentPosition?: number;
  type: string;
  draggable?: boolean;
  droppable?: boolean;
  onDrop?: DropTargetHookSpec<
    DraggableItemType,
    unknown,
    DraggableCollectType
  >['drop'];
  onDropHover?: OnDropHover;
}

const Draggable = ({
  children,
  position,
  parentPosition,
  type,
  draggable = true,
  droppable = true,
  onDropHover,
  onDrop,
}: DraggableProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, dragRef] = useDrag<
    DraggableItemType,
    unknown,
    DraggableCollectType
  >({
    type,
    item: { position, parentPosition, containerRef },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !!draggable,
  });

  const [, dropRef] = useDrop<DraggableItemType, unknown, DraggableCollectType>(
    {
      canDrop: () => !!droppable,
      accept: type,
      hover: (item, monitor) =>
        onDropHover?.(item, monitor, position, parentPosition),
      drop: (item, monitor) =>
        onDrop?.(item, monitor, position, parentPosition),
    }
  );

  dropRef(dragRef(containerRef));

  const containerClassNames = useMemo(
    () => clsx(isDragging && 'dragging'),
    [isDragging]
  );

  return (
    <Container className={containerClassNames} ref={containerRef}>
      {children}
    </Container>
  );
};

export default Draggable;
