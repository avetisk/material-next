// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-next/core/styles';
import Icon from '@material-next/core/Icon';
import IconButton from '@material-next/core/IconButton';
import DeleteIcon from '@material-next/icons/Delete';
import AddShoppingCartIcon from '@material-next/icons/AddShoppingCart';
import PhotoCamera from '@material-next/icons/PhotoCamera';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function IconButtons(props) {
  const { classes } = props;
  return (
    <div>
      <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="accent" className={classes.button} aria-label="Add an alarm">
        <Icon>alarm</Icon>
      </IconButton>
      <IconButton color="contrast" className={classes.button} aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" className={classes.button} component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}

IconButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);
