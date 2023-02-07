import React, { useContext, useMemo } from 'react';

import clsx from 'clsx';

import { Th, Icon } from './styles';
import { SortType } from '../types';
import { TableContext } from '../../../contexts/TableContext';

interface HeaderCellProps {
  name?: string;
  title?: string;
  sortable?: boolean;
  CustomHeaderCell?: (props: CustomHeaderCellProps) => JSX.Element;
  onSort?: (props: SortType) => void;
}

export type CustomHeaderCellProps = Pick<HeaderCellProps, 'name' | 'title'>;

const CellRenderer = ({ CustomHeaderCell, name, title }: HeaderCellProps) => {
  if (CustomHeaderCell) {
    return <CustomHeaderCell {...{ name, title }} />;
  }

  return <>{title}</>;
};

const HeaderCell = ({ sortable, onSort, ...props }: HeaderCellProps) => {
  const { name, title } = props;

  const { sort, handleSort } = useContext(TableContext);

  const handleOnSort = () => {
    if (sortable && onSort) {
      const { direction } = handleSort(name);
      onSort({ name, title, direction });
    }
  };

  const isSorted = useMemo(() => sort === name, [name, sort]);

  return (
    <Th className={clsx(sortable && 'sortable')} onClick={handleOnSort}>
      <CellRenderer {...props} />
      {sortable && onSort && (
        <Icon
          className={clsx(isSorted && 'current-filter')}
          icon={isSorted ? 'sync' : 'chevron-solid-down'}
          size={0.875}
        />
      )}
    </Th>
  );
};

export default HeaderCell;
