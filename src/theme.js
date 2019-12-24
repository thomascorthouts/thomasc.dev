export default {
  breakpoints: [
    '480px',
    '600px',
    '768px',
    '992px',
    '1200px',
    '1366px',
    '1680px',
  ],
  colors: {
    background: '#f0f3f3',
    blue: '#3260ab', // https://www.colorhexa.com/3260ab
    blueDark: '#2c5597',
    blueDarker: '#264a84',
    blueDarkest: '#213f70',
    blueLight: '#386bbf',
    blueLighter: '#4778c9',
    blueLightest: '#5b87cf',
    grey: '#4d4546',
    greyDark: '#3d4251',
    greyLight: '#d1d3d8',
    greyLighter: '#e6e7ea',
    white: '#ffffff',
    blackTransparent: 'rgba(0, 0, 0, 0.2)',
    whiteTransparent: 'rgba(255, 255, 255, 0.2)',
  },
  radii: ['4px', '50%'],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  sizes: [0, 8, 16, 32, 48, 64, 128, 192, 256, 320, 480, 640, 800, 960],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  images: {
    large: {
      maxWidth: 9,
      maxHeight: 400,
      mx: [null, null, null, null, null, 5],
      borderRadius: t => t.radii[0],
    },
  },
  text: {
    regular: {
      fontSize: [2, null, 3],
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'blue',
      '&:hover': {
        bg: 'blueLighter',
      },
    },
  },
}
