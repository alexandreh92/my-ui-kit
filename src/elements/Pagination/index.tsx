import React, { useCallback, useMemo } from 'react';

import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

import { Size } from '../../@types';
import { Container, PagesContainer, Page } from './styles';
import { range } from '../..';
import complexRange, { isSimplePagination } from '../../utils/complexRange';
import Button from '../Button';
import Heading from '../Heading';

export interface PaginationProps {
  totalPages: number;
  activePage: number;
  showEllipsis?: boolean;
  boundaryRange?: number;
  siblingRange?: number;
  ellipsisText?: string;
  ellipsize?: boolean;
  backButtonLabel?: string;
  nextButtonLabel?: string;
  size?: Size;
  className?: string;
  onPageClick?: (page: number) => void;
  onNextPageClick?: (page: number) => void;
  onPrevPageClick?: (page: number) => void;
}

const Pagination = ({
  size = 'medium',
  boundaryRange = 1,
  siblingRange = 1,
  activePage = 1,
  totalPages = 1,
  showEllipsis,
  ellipsisText,
  ellipsize,
  backButtonLabel,
  nextButtonLabel,
  className,
  onPageClick,
  onNextPageClick,
  onPrevPageClick,
}: PaginationProps) => {
  const rangeProps = useMemo(
    () => ({
      boundaryRange,
      siblingRange,
      activePage,
      totalPages,
      showEllipsis,
      ellipsisText,
    }),
    [
      boundaryRange,
      siblingRange,
      activePage,
      totalPages,
      showEllipsis,
      ellipsisText,
    ]
  );

  const pages = useMemo(
    () =>
      ellipsize && !isSimplePagination(rangeProps)
        ? complexRange(rangeProps)
        : range(1, totalPages),
    [ellipsize, rangeProps, totalPages]
  );

  const handleLabelSize = useCallback(() => {
    switch (size) {
      case 'small':
        return 'body-small';
      case 'large':
        return 'body-large';
      default:
        return 'body-medium';
    }
  }, [size]);

  const handlePageClick = useCallback(
    (page: string | number | false | undefined) => {
      if (!page || typeof page === 'string') return;
      if (activePage === page) return;

      onPageClick && onPageClick(page);
    },
    [onPageClick, activePage]
  );

  const handlePrevPageClick = useCallback(() => {
    if (activePage <= 1) return;

    onPrevPageClick && onPrevPageClick(activePage - 1);
  }, [onPrevPageClick, activePage]);

  const handleNextPageClick = useCallback(() => {
    if (activePage >= totalPages) return;

    onNextPageClick && onNextPageClick(activePage + 1);
  }, [onNextPageClick, activePage, totalPages]);

  return (
    <Container className={className}>
      <Button
        size={size}
        mode="text"
        icon="chevron-left"
        disabled={activePage <= 1}
        onClick={handlePrevPageClick}
      >
        {backButtonLabel}
      </Button>
      <PagesContainer className={clsx(size)}>
        {pages.map((page) => (
          <Page
            key={page === '...' ? uuidv4() : page?.toString()}
            className={page === activePage ? 'active' : undefined}
            onClick={() => handlePageClick(page)}
          >
            <Heading weight={handleLabelSize()}>{page}</Heading>
          </Page>
        ))}
      </PagesContainer>
      <Button
        size={size}
        mode="text"
        icon="chevron-right"
        iconPosition="right"
        disabled={activePage >= totalPages}
        onClick={handleNextPageClick}
      >
        {nextButtonLabel}
      </Button>
    </Container>
  );
};

export default Pagination;
