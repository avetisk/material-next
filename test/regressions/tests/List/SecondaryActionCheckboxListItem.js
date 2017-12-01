// @flow

import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction } from '@material-next/core/List';
import Checkbox from '@material-next/core/Checkbox';

export default function SecondaryActionCheckboxListItem() {
  return (
    <div style={{ background: '#fff', width: 300 }}>
      <ListItem button>
        <ListItemText primary="Primary" />
        <ListItemSecondaryAction>
          <Checkbox />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button dense>
        <ListItemText primary="Primary" />
        <ListItemSecondaryAction>
          <Checkbox />
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
}
