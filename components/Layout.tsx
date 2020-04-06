import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import blue from '@material-ui/core/colors/blue'
import amber from '@material-ui/core/colors/amber'
import Navigation from './Navigation';
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: amber
  },
});

const useStyles = makeStyles((theme: Theme) => createStyles({
  spacer: {
    ...theme.mixins.toolbar
  }
}))

export default function Layout({children}) {
    const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <Navigation />
        <div className={classes.spacer}></div>
        <main>
          {children}
        </main>
        <footer></footer>
      </ThemeProvider>
    )
}