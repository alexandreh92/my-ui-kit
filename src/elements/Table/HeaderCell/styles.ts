import styled from 'styled-components';

import DefaultIcon from '../../../addons/Icon';

export const Th = styled.th`
  background: ${({ theme }) => theme.colors.white};

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;

  overflow: hidden;
  padding: 0.625rem 1rem;
  position: sticky;
  text-align: left;
  text-overflow: ellipsis;

  vertical-align: middle;
  white-space: nowrap;

  border-bottom-color: #ebedf0;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  color: ${({ theme }) => theme.colors.gray[500]};

  display: relative;

  &.sortable {
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.primary[200]};
    }
  }
`;

export const Icon = styled(DefaultIcon)`
  position: absolute;
  top: 0.8rem;
  right: 0.375rem;

  fill: ${({ theme }) => theme.colors.primary[500]};

  &.current-filter {
    transform: rotate(90deg);
  }
`;
