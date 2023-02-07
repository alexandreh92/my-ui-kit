import React, { useCallback, useContext } from 'react';

import { BoardContext } from '..';

import { ReplaceReturnType } from '../../../@types';
import Draggable, { OnDropHover } from '../../../addons/Draggable';
import Heading from '../../../elements/Heading';
import Card, { BoardCardProps } from '../Card';
import { Container, Header, CardsContainer } from './styles';

export type ColumnCardProps = {
  id: string | number;
} & BoardCardProps;

export interface BoardColumnProps {
  cards: ColumnCardProps[];
  index: number;
  parentIndex: number;
  name: string;
}

const Column = ({ name, cards, index, parentIndex }: BoardColumnProps) => {
  const { onMove, onDrop } = useContext(BoardContext);

  const handleOnDropHover = useCallback<ReplaceReturnType<OnDropHover, void>>(
    (item, monitor, position, parentPosition) => {
      // // in this part we only care about column indexes
      const draggedParentPosition = item.parentPosition;
      const targetParentPosition = parentPosition;
      // const draggedPosition = item.position;
      // const targetPosition = 0;
      if (draggedParentPosition === targetParentPosition) {
        return;
      }
      // // // callback handling index positions
      // // onMove({
      // //   draggedParentPosition,
      // //   targetParentPosition,
      // //   draggedPosition,
      // //   targetPosition,
      // // });
      item.targetParentPosition = parentPosition;
      item.targetPosition = 0;
    },
    []
  );

  const handleOnCardDropHover = useCallback<
    ReplaceReturnType<OnDropHover, void>
  >((item, monitor, position, parentPosition) => {
    if (!item.containerRef.current) {
      return;
    }

    // These props are for dragging between two different lists(parents)
    const draggedParentPosition = item.parentPosition;
    const targetParentPosition = parentPosition;

    // These props are for the same list
    const draggedPosition = item.position;
    const targetPosition = position;

    if (
      draggedPosition === targetPosition &&
      draggedParentPosition === targetParentPosition
    ) {
      return;
    }

    const targetSize = item.containerRef.current.getBoundingClientRect();
    const targetCenter =
      ((targetSize?.bottom || 0) - (targetSize?.top || 0)) / 2;

    const draggedOffset = monitor.getClientOffset();
    const draggedTop = (draggedOffset?.y || 0) - (targetSize?.top || 0);

    if (draggedPosition < targetPosition && draggedTop < targetCenter) {
      return;
    }

    if (draggedPosition > targetPosition && draggedTop > targetCenter) {
      return;
    }

    // onMove({
    //   draggedParentPosition,
    //   targetParentPosition,
    //   draggedPosition,
    //   targetPosition,
    // });

    // console.log(item.position);

    item.targetParentPosition = parentPosition;
    item.targetPosition = position;
    // item.position = targetPosition;
    // item.parentPosition = targetParentPosition;
  }, []);

  return (
    <Draggable
      position={index}
      parentPosition={parentIndex}
      droppable
      draggable={false}
      type="CARD"
      onDropHover={handleOnDropHover}
      onDrop={onDrop}
    >
      <Container>
        <Header>
          <Heading weight="header-300">{`${name} (${cards.length})`}</Heading>
        </Header>
        <CardsContainer>
          {cards.map(({ id, title, dueDate, overdued }, idx) => (
            <Draggable
              key={id}
              draggable
              droppable
              type="CARD"
              position={idx}
              parentPosition={parentIndex}
              onDropHover={handleOnCardDropHover}
            >
              <Card title={title} dueDate={dueDate} overdued={overdued} />
            </Draggable>
          ))}
        </CardsContainer>
      </Container>
    </Draggable>
  );
};

export default Column;
