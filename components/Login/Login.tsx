import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LoginForm from './LoginForm';
import blue from '@material-ui/core/colors/blue';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme)=> createStyles({
  root: {
    position: 'relative',
    backgroundColor: blue[500],
    height: '100vh'
  },
  heading: {
    color: 'white',
    margin: '2rem 0'
  },
  login: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    minWidth: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minWidth: `30rem`
    }
  },
  loginCard: {
    padding: '2rem 1rem',
    width: '100%',
  },
  loginCardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}))

export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.login}>
        <Typography variant="h3" component="h1" className={classes.heading}>Todo-gether</Typography>
        <Card className={classes.loginCard}>
          <CardContent className={classes.loginCardContent}>
            <Typography variant="h4" component="h2">Log In</Typography>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}