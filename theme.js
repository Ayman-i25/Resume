import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    secondary: {
      main: orange[700], // #ed6c02
      contrastText: '#000000', // Black
    },
  },
});
