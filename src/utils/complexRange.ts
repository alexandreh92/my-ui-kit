import { range } from '..';

type CreateInnerPrefix = {
  (firstGroupEnd: number, innerGroupStart: number, ellipsisText: string):
    | string
    | number;
};

export const createInnerPrefix: CreateInnerPrefix = (
  firstGroupEnd,
  innerGroupStart,
  ellipsisText
) => {
  const prefixPage = innerGroupStart - 1;
  const showEllipsis = prefixPage !== firstGroupEnd + 1;

  return showEllipsis ? ellipsisText : prefixPage;
};

type CreateInnerSuffix = {
  (innerGroupEnd: number, lastGroupStart: number, ellipsisText: string):
    | string
    | number;
};

export const createInnerSuffix: CreateInnerSuffix = (
  innerGroupEnd,
  lastGroupStart,
  ellipsisText
) => {
  const suffixPage = innerGroupEnd + 1;
  const showEllipsis = suffixPage !== lastGroupStart - 1;

  return showEllipsis ? ellipsisText : suffixPage;
};

interface ComplexRange extends IsSimplePagination {
  activePage: number;
  ellipsisText?: string;
}

const complexRange = ({
  showEllipsis,
  boundaryRange,
  siblingRange,
  activePage,
  totalPages,
  ellipsisText = '...',
}: ComplexRange) => {
  const firstGroupEnd = boundaryRange;
  const firstGroup = range(1, firstGroupEnd);

  const ellipsisSize = showEllipsis ? 1 : 0;

  const lastGroupStart = totalPages + 1 - boundaryRange;
  const lastGroup = range(lastGroupStart, totalPages);

  const innerGroupStart = Math.min(
    Math.max(activePage - siblingRange, firstGroupEnd + ellipsisSize + 1),
    lastGroupStart - ellipsisSize - 2 * siblingRange - 1
  );
  const innerGroupEnd = innerGroupStart + 2 * siblingRange;
  const innerGroup = range(innerGroupStart, innerGroupEnd);

  return [
    ...firstGroup,
    showEllipsis &&
      createInnerPrefix(firstGroupEnd, innerGroupStart, ellipsisText),
    ...innerGroup,
    showEllipsis &&
      createInnerSuffix(innerGroupEnd, lastGroupStart, ellipsisText),
    ...lastGroup,
  ].filter(Boolean);
};

export default complexRange;

type IsSimplePagination = {
  boundaryRange: number;
  siblingRange: number;
  totalPages: number;
  showEllipsis?: boolean;
};

export const isSimplePagination = ({
  boundaryRange,
  showEllipsis,
  siblingRange,
  totalPages,
}: IsSimplePagination) => {
  const boundaryRangeSize = 2 * boundaryRange;
  const ellipsisSize = showEllipsis ? 2 : 0;
  const siblingRangeSize = 2 * siblingRange;

  return 1 + ellipsisSize + siblingRangeSize + boundaryRangeSize >= totalPages;
};
