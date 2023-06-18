import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import typography from './typography';

const theme = createTheme({
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default responsiveFontSizes(theme);
