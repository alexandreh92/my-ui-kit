import React from 'react';

import HeaderCell from '../HeaderCell';
import { Column, RowData } from '../types';
import { THead } from './styles';

interface THeadProps<TData> {
  columns: Column<TData>[];
  sortable?: boolean;
}

const Head = <TData extends RowData>({
  columns,
  sortable,
}: THeadProps<TData>) => {
  return (
    <THead>
      <tr>
        {columns.map(
          ({ HeaderCell: CustomHeaderCell, onSort, title, name }) => (
            <HeaderCell
              key={title}
              title={title}
              name={name}
              CustomHeaderCell={CustomHeaderCell}
              sortable={sortable}
              onSort={onSort}
            />
          )
        )}
      </tr>
    </THead>
  );
};

export default Head;
