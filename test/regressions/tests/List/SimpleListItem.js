// @flow

import React from 'react';
import { ListItem, ListItemText } from '@material-next/core/List';

export default function SimpleListItem() {
  return (
    <div style={{ background: '#fff', width: 300 }}>
      <ListItem>
        <ListItemText primary="Primary" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
      <ListItem dense>
        <ListItemText primary="Primary" />
      </ListItem>
      <ListItem dense>
        <ListItemText primary="Primary" secondary="Secondary" />
      </ListItem>
    </div>
  );
}
