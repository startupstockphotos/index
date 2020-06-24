import { DefaultTheme } from 'styled-components';

export type Colors = {
  body: string;
  primary: string;
  secondary: string;
  background: string;
};

export type Spaces = {
  xxs: string;
  xs: string;
  sm: string;
  med: string;
  lg: string;
  xl: string;
  xxl: string;
};

export type Shadows = {
  light: string;
  medium: string;
};

export type Sizes = {
  xs: string;
  sm: string;
  med: string;
  lg: string;
};

export type TransitionDurations = {
  xslow: string;
  slow: string;
  fast: string;
};

export type TransitionTimingFunctions = {
  natural: string;
  ease: string;
};

/**
 * @see https://www.styled-components.com/docs/api#typescript
 */
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSizes: string[];
    lineHeights: string[];
    fontWeights: number[];
    space: Spaces;
    breakpoints: string[];
    radii: string[];
    shadows: Shadows;
    sizes: Sizes;
    zIndices: number[];
    transitionDurations: TransitionDurations;
    transitionTimingFunctions: TransitionTimingFunctions;
  }
}

export const colors: Colors = {
  body: '#2E3280',
  primary: '#5B63FE',
  secondary: '#686D86',
  background: '#F8FAFC',
};

/**
 * Don't extend these type theme styles!
 *
 * If you have questions, ask someone.
 */
export const fontSizes = ['12px', '14px', '16px', '18px', '21px', '32px'];
export const lineHeights = ['16px', '20px', '24px', '24px', '24px', '40px'];
export const fontWeights = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const space = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  med: '24px',
  lg: '32px',
  xl: '48px',
  xxl: '64px',
};

// Bootstrap 4 breakpoints
export const breakpoints = ['576px', '768px', '992px', '1200px'];

export const radii = ['0px', '4px', '6px'];

export const shadows = {
  light: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  medium: '0px 2px 6px rgba(0, 0, 0, 0.1)',
};

export const sizes = {
  xs: '450px',
  sm: '568px',
  med: '900px',
  lg: '1200px',
};

export const zIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const transitionDurations = {
  xslow: '450ms',
  slow: '300ms',
  fast: '150ms',
};

export const transitionTimingFunctions = {
  natural: 'cubic-bezier(.01,.79,.35,.99)',
  ease: 'ease-in-out',
};

export const theme: DefaultTheme = {
  colors,
  fontSizes,
  lineHeights,
  fontWeights,
  space,
  breakpoints,
  radii,
  shadows,
  sizes,
  zIndices,
  transitionDurations,
  transitionTimingFunctions,
};
