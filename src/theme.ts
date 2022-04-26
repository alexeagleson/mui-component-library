import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  /* eslint-disable no-unused-vars */
  // The type can be extended
  // https://stackoverflow.com/a/63090311
  /* eslint-enable no-unused-vars */
}

const COLOURS = {
  white: '#FFFFFF',
  black: '#000000',
  green: '#28b56f',
} as const;

const SPACING = 4;

const baseTheme = createTheme({
  palette: {
    primary: { main: COLOURS.green },
    secondary: { main: COLOURS.white },
    background: {
      default: COLOURS.white,
    },
  },
  spacing: SPACING,
  shape: {
    borderRadius: 0,
  },
});

const theme = createTheme(
  {
    typography: {
      h1: {
        fontSize: 36,
      },
      allVariants: {
        lineHeight: 1.4,
        whiteSpace: 'pre-line',
      },
    },
    components: {
      // Buttons

      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {},
        },
      },

      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
          variant: 'contained',
          color: 'primary',
        },

        styleOverrides: {
          root: {
            textTransform: 'none',
          },
          text: {
            minWidth: 0,
            padding: 0,
            color: 'inherit',
            backgroundColor: 'inherit',
            border: 'none',
            textDecoration: 'none',
            '&:hover': {
              color: 'inherit',
              backgroundColor: 'inherit',
              border: 'none',
              textDecoration: 'underline',
            },
          },
        },
      },

      MuiTypography: {
        styleOverrides: {
          root: {
            color: 'inherit',
            lineHeight: 1.4,
          },
        },
      },

      // Labels

      MuiFormLabel: {
        styleOverrides: {
          root: {},
        },
      },

      MuiInputLabel: {
        defaultProps: {
          shrink: true,
        },
      },

      // Inputs

      MuiInputBase: {
        styleOverrides: {
          root: {},
        },
      },

      // Icons

      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: 24,
          },
        },
      },
    },
  },
  baseTheme
);

export default theme;
