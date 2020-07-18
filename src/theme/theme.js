// Import the ThemeProvider component
// as well as the the creator function
import { createMuiTheme } from '@material-ui/core/styles';

// Create a new theme using lato Sans
const theme = createMuiTheme({
    typography: {
        fontFamily: "lato, sans-serif",
    }
});

export default theme;