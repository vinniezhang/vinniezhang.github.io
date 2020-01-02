import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import PhotoCameraTwoToneIcon from '@material-ui/icons/PhotoCameraTwoTone';
import ClassTwoToneIcon from '@material-ui/icons/ClassTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import Grid from '@material-ui/core/Grid';
import Typist from 'react-typist';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    // width: theme.spacing(7) + 1,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9) + 1,
    // },
    width:'0',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <div style={{
           backgroundColor: '#eeefb3',
           minHeight: '12vh',
           display: 'inline-block',
           flexDirection: 'column',
           fontSize: 'calc(15px + 3vmin)',
           color: 'white',
           fontFamily: 'Helvetica',
        }}>

          <div style={{textAlign:'left', display:'inline-block', width:'5%', paddingLeft:'20px'}}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <div style={{display:'inline-block', width: '90%', textAlign:'center', paddingTop:'10px'}}>
              
          <Grid direction='row' alignItems='center' justify='center' style={{width:'100%', marginBottom:'20px', paddingLeft:'5%', paddingRight:'5%'}} xs={12}> 
              <Typist avgTypingDelay={210} startDelay={500}>
                      programmer and poet
                      <Typist.Backspace count={21} avgTypingDelay={50} delay={1700} />
                      vinnie zhang
              </Typist>
          </Grid>
          </div>
        </div>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        {/* <Divider style={{marginTop:'20px'}}/> */}
        <List style={{marginTop:'5.5vh'}}>

          <Link to={'/'} style={{textDecoration:'none', color:'black'}}>
            <ListItem button>
              <ListItemIcon>
                <PersonTwoToneIcon className={classes.icon} style={{color:'blue'}}/>
              </ListItemIcon>
              <ListItemText primary={'About'}/>
            </ListItem>
          </Link>

          <Link to={'/Projects'} style={{textDecoration:'none', color:'black'}}>
            <ListItem button>
              <ListItemIcon>
                <ComputerOutlinedIcon className={classes.icon} style={{color:'black'}}/>
              </ListItemIcon>
              <ListItemText primary={'Projects'}/>
            </ListItem>
          </Link>

          <Link to={'/film'} style={{textDecoration:'none', color:'black'}}>
            <ListItem button>
              <ListItemIcon>
                <PhotoCameraTwoToneIcon className={classes.icon} style={{color:'#57595c'}}/>
              </ListItemIcon>
              <ListItemText primary={'Photography'}/>
            </ListItem>
          </Link>

          <Link to={'/Poetry'} style={{textDecoration:'none', color:'black'}}>
            <ListItem button>
              <ListItemIcon>
                <ClassTwoToneIcon className={classes.icon} style={{color:'red'}}/>
              </ListItemIcon>
              <ListItemText primary={'Poetry'}/>
            </ListItem>
          </Link>

          <Link to={'/Resume'} style={{textDecoration:'none', color:'black'}}>
            <ListItem button>
              <ListItemIcon>
                <AssignmentOutlinedIcon className={classes.icon} style={{color:'black'}}/>
              </ListItemIcon>
              <ListItemText primary={'Resume'}/>
            </ListItem>
          </Link>

          <Link to={'/Contact'} style={{textDecoration:'none', color:'black'}}>
            <ListItem button>
              <ListItemIcon>
                <EmailTwoToneIcon className={classes.icon} style={{color:'#d19b1d'}}/>
              </ListItemIcon>
              <ListItemText primary={'Contact'}/>
            </ListItem>
          </Link>
        </List>

        <Divider/>
      </Drawer>
    </div>
  );
}