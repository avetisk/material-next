// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-next/core/styles';
import List, { ListItem, ListItemText } from '@material-next/core/List';
import Avatar from '@material-next/core/Avatar';
import Divider from '@material-next/core/Divider';
import FolderIcon from '@material-next/icons/Folder';
import ImageIcon from '@material-next/icons/Image';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    background: theme.palette.background.paper,
  },
});

function InsetDividers(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem button>
        <Avatar>
          <FolderIcon />
        </Avatar>
        <ListItemText primary="Work" secondary="Jan 28, 2014" />
      </ListItem>
      <Divider inset />
      <ListItem button>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary="Vacation" secondary="Jan 20, 2014" />
      </ListItem>
    </List>
  );
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);
