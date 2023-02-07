import React from 'react';

import { RowData } from '../types';
import { Td } from './styles';

export interface DataCellProps<TData> {
  dataRow: TData;
  DataCellRenderer: (
    props: Pick<DataCellProps<TData>, 'dataRow'>
  ) => JSX.Element;
  onCellClick?: (props: TData | undefined) => void;
}

const DataCell = <TData extends RowData>({
  DataCellRenderer,
  dataRow,
  onCellClick,
}: DataCellProps<TData>) => {
  const handleCellClick = () => {
    onCellClick && onCellClick(dataRow);
  };

  return (
    <Td onClick={handleCellClick}>
      <DataCellRenderer dataRow={dataRow} />
    </Td>
  );
};

export default DataCell;
