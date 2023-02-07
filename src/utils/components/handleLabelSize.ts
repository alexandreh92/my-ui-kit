import { HeadingMode, Size } from '../../@types';

export const handleLabelSize = (inputSize: Size): HeadingMode => {
  switch (inputSize) {
    case 'small':
      return 'header-100';
    case 'medium':
      return 'header-200';
    case 'large':
      return 'header-300';
    default:
      return 'header-300';
  }
};
