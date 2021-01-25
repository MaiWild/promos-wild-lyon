import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F76C6C',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    action: {
      active: '#fff',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#394253',
      secondary: '#e8e8e8',
    },
    divider: '#e8e8e8',
  },
});

export default theme;
