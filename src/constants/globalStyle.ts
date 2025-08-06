const colors = {
  WHITE: '#fff',
  BLACK: '#000',
  GREY: {
    50: '#f9fafb',
    100: '#f2f4f6',
    200: '#e5e8eb',
    300: '#d1d6db',
    400: '#b0b8c1',
    500: '#8b95a1',
    600: '#6b7684',
    700: '#4e5968',
    800: '#333d4b',
    900: '#191f28',
  },
  GREY_OPACITY: {
    50: 'rgba(0, 23, 51, 0.02)',
    100: 'rgba(2, 32, 71, 0.05)',
    200: 'rgba(0, 27, 55, 0.1)',
    300: 'rgba(0, 29, 58, 0.18)',
    400: 'rgba(0, 25, 54, 0.31)',
    500: 'rgba(3, 24, 50, 0.46)',
    600: 'rgba(0, 19, 43, 0.58)',
    700: 'rgba(3, 18, 40, 0.7)',
    800: 'rgba(0, 12, 30, 0.8)',
    900: 'rgba(2, 9, 19, 0.91)',
  },
  ORANGE: {
    100: '#fffbe5',
    200: '#fff7cc',
    300: '#fff0a6',
    400: '#ffea80',
    500: '#ffe359',
    600: '#ffdd33',
    700: '#ffd400',
    800: '#ffc100',
    900: '#ffb320',
  },
  BLUE: {
    100: '#eff8ff',
    200: '#b1dcfd',
    300: '#7fc7ff',
    400: '#1c9eff',
    500: '#0289f0',
  },
  GREEN: {
    100: '#f1fcf8',
    200: '#00c82c',
  },
  RED: {
    100: '#faedef',
    200: '#FFB4B4',
    300: '#FF5F5F',
    400: '#ef2a2b',
  },
  PINK: {
    500: '#BF5C79',
    700: '#C63B64',
  },
} as const;

const padding = {
  VERTICAL: {
    xl: 18,
    lg: 15,
    md: 12,
    sm: 10,
    xs: 8,
  },
  HORIZONTAL: {
    xl: 18,
    lg: 15,
    md: 12,
    sm: 10,
    xs: 8,
  },
} as const;

const border = {
  RADIUS: {
    lg: 4,
    md: 2,
    sm: 1,
  },
} as const;

const font = {
  SIZE: {
    '2xl': 96,
    xl: 72,
    h1: 56,
    h2: 48,
    h3: 36,
    h4: 32,
    h5: 24,
    h6: 20,
    h7: 17,
    p: 15,
    sm: 13,
    xs: 11,
  },
  WEIGHT: {
    black: 900,
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
  },
} as const;

export {colors, padding, border, font};
