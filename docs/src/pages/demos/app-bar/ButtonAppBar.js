// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-next/core/styles';
import AppBar from '@material-next/core/AppBar';
import Toolbar from '@material-next/core/Toolbar';
import Typography from '@material-next/core/Typography';
import Button from '@material-next/core/Button';
import IconButton from '@material-next/core/IconButton';
import MenuIcon from '@material-next/icons/Menu';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
