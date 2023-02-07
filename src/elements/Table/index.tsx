import React from 'react';

import Body from './Body';
import Head from './Head';
import { Column, RowData } from './types';
import { TTable } from './styles';
import TableProvider from '../../contexts/TableContext';
import { TableFilter } from '../../@types';

export interface TableProps<TData extends RowData> {
  data: TData[];
  columns: Column<TData>[];
  hooverable?: boolean;
  sortable?: boolean;
  filters?: TableFilter;
  onRowClick?: (props: TData) => void;
  className?: string;
}

const Table = <TData extends RowData>({
  data,
  columns,
  hooverable,
  sortable,
  filters,
  className,
  onRowClick,
}: TableProps<TData>) => {
  return (
    <TableProvider filters={filters}>
      <TTable className={className}>
        <Head columns={columns} sortable={sortable} />
        <Body
          data={data}
          columns={columns}
          hooverable={hooverable}
          onRowClick={onRowClick}
        />
      </TTable>
    </TableProvider>
  );
};

export default Table;
