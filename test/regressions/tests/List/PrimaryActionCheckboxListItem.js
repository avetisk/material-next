// @flow

import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction } from '@material-next/core/List';
import Checkbox from '@material-next/core/Checkbox';
import IconButton from '@material-next/core/IconButton';

export default function PrimaryActionCheckboxListItem() {
  return (
    <div style={{ background: '#fff', width: 300 }}>
      <ListItem button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary="Primary" />
        <ListItemSecondaryAction>
          <IconButton>comment</IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button dense>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary="Primary" />
        <ListItemSecondaryAction>
          <IconButton>comment</IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}
