import getTokens from '@kiwicom/orbit-components/lib/getTokens';

const theme = getTokens({
  palette: {
    product: {
      light: '#fdf0ff',
      lightHover: '#fbdfff',
      lightActive: '#f9ceff',
      normal: '#874591',
      normalHover: '#63336a',
      normalActive: '#3d0046',
      dark: '#110013'
    }
  },
  base:{
    fontFamily:
      '-apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
  }
});

export default { orbit: theme };
