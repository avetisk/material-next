// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-next/core/styles';
import List, { ListItem, ListItemText } from '@material-next/core/List';
import Divider from '@material-next/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    background: theme.palette.background.paper,
  },
});

function ListDividers(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Drafts" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
    </List>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);
