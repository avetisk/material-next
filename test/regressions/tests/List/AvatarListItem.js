// @flow

import React from 'react';
import Avatar from '@material-next/core/Avatar';
import Icon from '@material-next/core/Icon';
import List, { ListItem, ListItemText } from '@material-next/core/List';

export default function AvatarListItem() {
  return (
    <div style={{ background: '#fff', width: 300 }}>
      <ListItem>
        <Avatar>
          <Icon>folder</Icon>
        </Avatar>
        <ListItemText primary="Avatar" />
      </ListItem>
      <ListItem>
        <Avatar>
          <Icon>folder</Icon>
        </Avatar>
        <ListItemText primary="Avatar" secondary="Secondary" />
      </ListItem>
      <List dense>
        <ListItem>
          <Avatar>
            <Icon>folder</Icon>
          </Avatar>
          <ListItemText primary="Avatar" />
        </ListItem>
        <ListItem>
          <Avatar>
            <Icon>folder</Icon>
          </Avatar>
          <ListItemText primary="Avatar" secondary="Secondary" />
        </ListItem>
      </List>
    </div>
  );
}
