import { HeadingMode, Size } from '../../@types';

export const handleCaptionSize = (inputSize: Size): HeadingMode => {
  switch (inputSize) {
    case 'small':
    case 'medium':
      return 'body-small';
    case 'large':
      return 'body-medium';
    default:
      return 'body-small';
  }
};
