// @flow

import React from 'react';
import Divider from '@material-next/core/Divider';

export default function InsetDivider() {
  return (
    <div style={{ padding: 2, width: 100 }}>
      <Divider inset />
    </div>
  );
}
