// @flow

import React from 'react';
import LinearProgress from '@material-next/core/Progress/LinearProgress';

export default function DeterminateLinearProgress() {
  return (
    <LinearProgress
      mode="determinate"
      value={60}
      style={{
        width: 150,
      }}
    />
  );
}
