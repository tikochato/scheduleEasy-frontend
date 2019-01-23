import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CatalogosIcon from '@material-ui/icons/ViewList';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

export class MenuView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="home-menu-view">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                ScheduleEasy
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <List>
              <NavLink to="/personas" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <CatalogosIcon />
                  </ListItemIcon>
                  <ListItemText primary="Personas" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <CatalogosIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reuniones" />
                </ListItem>
              </NavLink>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <CatalogosIcon />
                </ListItemIcon>
                <ListItemText primary="Reporte" />
              </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {this.props.body}
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MenuView);
