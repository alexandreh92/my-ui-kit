import React, { useState } from 'react';

import produce from 'immer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Draggable, { OnMoveType } from '../../../src/addons/Draggable';
import Card from '../../../src/collections/Board/Card';

const items = [
  { id: 1, type: 'card', content: 'foo', position: 1 },
  { id: 2, type: 'card', content: 'baz', position: 2 },
  { id: 3, type: 'card', content: 'bird', position: 7 },
  { id: 4, type: 'card', content: 'ola', position: 4 },
  { id: 5, type: 'card', content: 'tchau', position: 3 },
];

const DraggableContainer = () => {
  const [stateItems, setStateItems] = useState(
    items.sort((a, b) => a.position - b.position)
  );

  const handleOnMove = (position: OnMoveType) => {
    const { draggedPosition, targetPosition } = position;

    const dragged = stateItems[draggedPosition];

    const newArray = produce(stateItems, (draft) => {
      // remove old value
      draft.splice(draggedPosition, 1);

      // add new index in current position
      draft.splice(targetPosition, 0, dragged);
    });

    setStateItems(newArray);

    // debounce values in callback
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {stateItems.map((item, idx) => (
        <Draggable
          key={item.id}
          position={idx}
          type={item.type}
          onMove={handleOnMove}
        >
          <Card title={item.content} dueDate="01/Jan" />
        </Draggable>
      ))}
    </DndProvider>
  );
};

export default DraggableContainer;
