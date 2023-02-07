import React, { createContext, useCallback, useMemo, useState } from 'react';

import produce from 'immer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Column, { ColumnCardProps } from './Column';
import { Container } from './styles';

export interface BoardDataProps {
  id: number | string;
  name: string;
  position: number;
  cards: ColumnCardProps[];
}

export interface BoardData {
  data: BoardDataProps[];
}

export const BoardContext = createContext({});

const Board = ({ data }: BoardData) => {
  const [stateItems, setStateItems] = useState(data || []);

  const onDrop = useCallback(
    (item) => {
      const newArray = produce(stateItems, (draft) => {
        const dragged = stateItems[item.parentPosition].cards[item.position];

        // remove old value
        draft[item.parentPosition].cards.splice(item.position, 1);

        // add new index in current position
        draft[item.targetParentPosition].cards.splice(
          item.targetPosition,
          0,
          dragged
        );
      });

      setStateItems(newArray);
    },
    [stateItems]
  );

  const value = useMemo(
    () => ({
      onDrop,
    }),
    [onDrop]
  );

  return (
    <BoardContext.Provider value={value}>
      <DndProvider backend={HTML5Backend}>
        <Container>
          {stateItems.map((column, idx) => (
            <Column
              key={column.id}
              index={idx}
              parentIndex={idx}
              name={column.name}
              cards={column.cards}
            />
          ))}
        </Container>
      </DndProvider>
    </BoardContext.Provider>
  );
};

export default Board;
