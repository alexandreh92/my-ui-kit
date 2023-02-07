// Value in rem
const PADDING = 0.5;
// Base pixel value
const BASE = 16;

type DropdownPositionProps = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

type handleDropdownPosition = (
  triggerRef: React.MutableRefObject<any>,
  contentRef: React.RefObject<HTMLDivElement>,
  mode: any
) => DropdownPositionProps;

export const handleDropdownPosition: handleDropdownPosition = (
  triggerRef,
  contentRef,
  mode
) => {
  if (!contentRef?.current) return {} as DOMRect;

  const triggerRefBounding = triggerRef.current.getBoundingClientRect();
  const contentRefBounding = contentRef.current.getBoundingClientRect();

  let top;
  let left;
  let bottom;
  let right;

  switch (mode) {
    case 'bottom-left': {
      top =
        (triggerRefBounding.top +
          triggerRefBounding.height +
          window.pageYOffset) /
          BASE +
        PADDING;
      left = triggerRefBounding.left / BASE;

      break;
    }
    case 'bottom-right': {
      top =
        (triggerRefBounding.top +
          triggerRefBounding.height +
          window.pageYOffset) /
          BASE +
        PADDING;
      left =
        (triggerRefBounding.left +
          triggerRefBounding.width -
          contentRefBounding.width) /
        BASE;

      break;
    }
    case 'top-left': {
      top =
        (triggerRefBounding.top -
          contentRefBounding.height +
          window.pageYOffset) /
          BASE -
        PADDING;
      left = triggerRefBounding.left / BASE;

      break;
    }
    case 'top-right': {
      top =
        (triggerRefBounding.top -
          contentRefBounding.height +
          window.pageYOffset) /
          BASE -
        PADDING;
      left =
        (triggerRefBounding.left +
          triggerRefBounding.width -
          contentRefBounding.width) /
        BASE;

      break;
    }

    default:
      break;
  }

  return { top, left, bottom, right };
};
