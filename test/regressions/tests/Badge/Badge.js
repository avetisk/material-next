// @flow

import React from 'react';
import Badge from '@material-next/core/Badge';
import Icon from '@material-next/core/Icon';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={1} color="primary">
      <Icon>mail</Icon>
    </Badge>
  );
}
