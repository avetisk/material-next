// @flow

import React from 'react';
import Icon from '@material-next/core/Icon';
import { ListItem, ListItemText, ListItemIcon } from '@material-next/core/List';

export default function IconListItem() {
  return (
    <div style={{ background: '#fff', width: 300 }}>
      <ListItem>
        <ListItemIcon>
          <Icon>phone</Icon>
        </ListItemIcon>
        <ListItemText primary="Icon" />
      </ListItem>
      <ListItem>
        <ListItemText inset primary="Inset" secondary="Secondary" />
      </ListItem>
      <ListItem dense>
        <ListItemIcon>
          <Icon>phone</Icon>
        </ListItemIcon>
        <ListItemText primary="Icon" />
      </ListItem>
      <ListItem dense>
        <ListItemText inset primary="Inset" secondary="Secondary" />
      </ListItem>
    </div>
  );
}
