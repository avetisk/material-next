// @flow

import React from 'react';
import IconButton from '@material-next/core/IconButton';
import deepOrange from '@material-next/core/colors/deepOrange';

export default function ContrastIconButton() {
  return (
    <IconButton color="contrast" style={{ backgroundColor: deepOrange[500] }}>
      home
    </IconButton>
  );
}
