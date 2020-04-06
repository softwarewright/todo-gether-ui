import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useRef } from 'react'; 
import clsx from "clsx";


const useStyle = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  formInput: {
    marginTop: '2rem'
  },
  submitButton: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "10rem",
      alignSelf: "flex-end"
    }
  }
}))

// interface LoginFormProps {
//   handleLoginSubmit(username: string, password: string): void
// }

// const LoginForm = () => {
export default function LoginForm() {
  const classes = useStyle();
  const email = useRef(null);
  const password = useRef(null);
  
  const login = () => {

  };

  return (
    <form className={classes.root}>
      <TextField ref={email} type="email" label="Email" className={classes.formInput} />
      <TextField ref={password} type="password" label="Password" className={classes.formInput}/>
      <Button aria-label="login" variant="contained" color="primary" className={clsx(classes.formInput, classes.submitButton)}>
        Login
      </Button>
    </form>
  )
}

// export default LoginForm;