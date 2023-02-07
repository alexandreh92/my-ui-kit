import React, { useMemo, useState, createContext, useCallback } from 'react';

import { FilterDirectionOrder, TableFilter } from '../../@types';

interface TableContextProps {
  sort: string | undefined;
  direction: FilterDirectionOrder | undefined;
  handleSort: (name?: string) => TableFilter;
}

export const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
);

interface TableProviderProps {
  filters?: TableFilter;
  children: React.ReactNode;
}

const TableProvider = ({ filters, children }: TableProviderProps) => {
  const [sort, setSort] = useState<string | undefined>(filters?.name);
  const [direction, setDirection] = useState<FilterDirectionOrder | undefined>(
    filters?.direction
  );

  const handleSort = useCallback(
    (name: string) => {
      let newDirection: FilterDirectionOrder | undefined;

      if (direction === 'DESC' || !direction) newDirection = 'ASC';
      if (direction === 'ASC') newDirection = 'DESC';

      if (name !== sort) newDirection = 'ASC';

      setSort(name);
      setDirection(newDirection);

      return { name, direction: newDirection };
    },
    [direction, sort]
  );

  const value = useMemo(
    () => ({
      sort,
      direction,
      handleSort,
    }),
    [sort, direction, handleSort]
  );

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export default TableProvider;
