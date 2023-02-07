import React from 'react';

import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import DataCell from '../DataCell';
import { Column, RowData } from '../types';
import { TBody } from './styles';

interface BodyProps<TData> {
  data: TData[];
  columns: Column<TData>[];
  hooverable?: boolean;
  onRowClick?: (props: TData) => void;
}

const Body = <TData extends RowData>({
  data,
  columns,
  hooverable,
  onRowClick,
}: BodyProps<TData>) => {
  return (
    <TBody className={clsx(hooverable && 'hooverable')}>
      {data.map((dataRow) => {
        const handleOnRowClick = () => {
          onRowClick && onRowClick(dataRow);
        };

        return (
          <tr key={uuidv4()} onClick={handleOnRowClick}>
            {columns.map(({ DataCell: DataCellRenderer, onCellClick }) => (
              <DataCell
                key={uuidv4()}
                DataCellRenderer={DataCellRenderer}
                dataRow={dataRow}
                onCellClick={onCellClick}
              />
            ))}
          </tr>
        );
      })}
    </TBody>
  );
};

export default Body;
