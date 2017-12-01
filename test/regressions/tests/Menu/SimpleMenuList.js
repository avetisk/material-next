// @flow

import React from 'react';
import Paper from '@material-next/core/Paper';
import { MenuList, MenuItem } from '@material-next/core/Menu';

export default function SimpleMenuList() {
  return (
    <Paper elevation={8}>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem selected>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Paper>
  );
}
