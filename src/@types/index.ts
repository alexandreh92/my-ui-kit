import { HTMLAttributes } from 'react';

export type ReplaceReturnType<T, TNewReturn> = T extends (...a: infer A) => any
  ? (...a: A) => TNewReturn
  : never;

export const sizes = ['small', 'medium', 'large'] as const;
export type Size = typeof sizes[number];

export const positionLabels = ['top', 'right'] as const;
export type PositionType = typeof positionLabels[number];

export const variants = [
  'primary',
  'secondary',
  'tertiary',
  'destructive',
  'destructive-secondary',
  'success',
  'success-secondary',
] as const;
export type Variant = typeof variants[number];

export const buttonModes = ['default', 'text'] as const;
export type ButtonMode = typeof buttonModes[number];

export const buttonElements = ['div', 'button'] as const;
export type ButtonElement = typeof buttonElements[number];

export const iconPositions = ['left', 'right'] as const;
export type IconPosition = typeof iconPositions[number];

export const headingModes = [
  'body-small',
  'body-medium',
  'body-large',
  'subtitle',
  'header-100',
  'header-200',
  'header-300',
  'header-400',
  'header-500',
  'header-600',
  'header-700',
  'header-800',
  'header-900',
] as const;
export type HeadingMode = typeof headingModes[number];

export const blankStatePaddingSize = ['small', 'medium', 'big'] as const;
export type BlankStatePaddingSize = typeof blankStatePaddingSize[number];

export type CommonComponentProps = Pick<
  HTMLAttributes<any>,
  'className' | 'style' | 'tabIndex' | 'id'
>;

const filterDirectionOrder = ['ASC', 'DESC'] as const;

export type FilterDirectionOrder = typeof filterDirectionOrder[number];

export interface TableFilter {
  name?: string;
  direction?: FilterDirectionOrder;
}

export const toastModes = [
  'success',
  'info',
  'error',
  'warning',
  'alert',
] as const;

export type ToastMode = typeof toastModes[number];

export const toastPositions = [
  'top-left',
  'top-right',
  'top-middle',
  'middle-left',
  'middle-right',
  'middle',
  'bottom-left',
  'bottom-right',
  'bottom-middle',
] as const;

export type ToastPosition = typeof toastPositions[number];

export interface Toaster {
  id: string | number;
  title?: string;
  message?: string;
  mode?: ToastMode;
  duration?: number;
  persistent?: boolean;
}

const menuMode = ['tabular', 'vertical'] as const;

export type MenuMode = typeof menuMode[number];
