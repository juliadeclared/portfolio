import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const customBreakpointValues = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

const breakpoints = createBreakpoints({ ...customBreakpointValues });

export default createMuiTheme({
  breakpoints: {
    ...customBreakpointValues,
  },
  palette: {
    primary: {
      main: '#f6bd60',
    },
    secondary: {
      main: '#84a59d',
    },
    background: {
      default: '#ffb5a7',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Sacramento',
      marginBottom: 5,
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    h2: {
      fontFamily: 'Sacramento',
      [breakpoints.down('sm')]: {
        fontSize: 42,
        textAlign: 'center',
      },
    },
    h3: {
      fontFamily: 'Josefin Slab',
      [breakpoints.down('sm')]: {
        fontSize: 34,
        textAlign: 'center',
      },
    },
    h4: {
      fontFamily: 'Josefin Slab',
      [breakpoints.down('sm')]: {
        fontSize: 20,
        textAlign: 'center',
      },
    },
    h5: {
      fontFamily: 'Josefin Slab',
      fontWeight: 600,
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    h6: {
      fontFamily: 'Josefin Slab',
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50,
        minWidth: 160,
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 16,
      },
      containedPrimary: {
        color: '#FFFFFF',
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 20,
        background: 'rgba(255,255,255, 0.8)',
        padding: '5%',
        paddingTop: '5%',
        paddingBottom: '5%',
      },
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
      size: 'medium',
      margin: 'normal',
    },
  },
});
