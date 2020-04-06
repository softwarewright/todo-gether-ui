import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import clsx from 'clsx';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const drawerWidth = 14;
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex'
  },
  drawer: {
    width: `${drawerWidth}rem`,
    flexShrink: 0
  },
  drawerPaper: {
    width: `${drawerWidth}rem`
  },
  hide: {
    display: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  userSettings: {
    marginTop: "auto"
  }
}))


export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const logout = () => console.log("Logging out")

  const drawerNavItems = [{
    title: 'Home',
    icon: <HomeIcon/>,
    link: '/'
  }, {
    title: 'My Todos',
    icon: <ListIcon/>,
    link: '/todos'
  }, {
    title: 'Collaborators',
    icon: <PersonIcon/>,
    link: '/collaborators'
  }]

  return (
    <Fragment>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={openDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>Todo-gether</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawerNavItems.map(({title, icon, link}) => (
            <Link href={link} key={link}>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title } />
              </ListItem>
            </Link>
          ))}
          
        </List>
        <Divider />
        <List className={classes.userSettings}>
          <Link href="/settings" key="/settings">
            <ListItem  button>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings"/>
            </ListItem>
          </Link>
          <ListItem button key="logout">
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  )
}