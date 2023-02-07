import 'styled-components';
import { theme } from '../globals/defaultTheme';

type BycodersTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends BycodersTheme {}
}
