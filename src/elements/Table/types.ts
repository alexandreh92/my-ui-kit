import { TableFilter } from '../../@types';
import { DataCellProps } from './DataCell';
import { CustomHeaderCellProps } from './HeaderCell';

export interface RowData {
  id?: string | number;
  key?: string | number;
}

export interface Column<TData> {
  title: string;
  name?: string;
  HeaderCell?: (props: CustomHeaderCellProps) => JSX.Element;
  DataCell: (props: Pick<DataCellProps<TData>, 'dataRow'>) => JSX.Element;
  onCellClick?: (props?: TData) => void;
  onSort?: (props: SortType) => void;
}

export type SortType = Partial<Pick<Column<any>, 'name' | 'title'>> &
  Pick<TableFilter, 'direction'>;
