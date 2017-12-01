// @flow weak

import React from 'react';
import IconButton from '@material-next/core/IconButton';
import Icon from '@material-next/core/Icon';

const WrappedIcon = props => <Icon {...props} />;
WrappedIcon.muiName = 'Icon';

export default function Composition() {
  return (
    <div>
      <IconButton>
        <Icon>alarm</Icon>
      </IconButton>
      <IconButton>
        <WrappedIcon>alarm</WrappedIcon>
      </IconButton>
    </div>
  );
}
