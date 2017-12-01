// @flow

import React from 'react';
import Switch from '@material-next/core/Switch';
import { FormControlLabel } from '@material-next/core/Form';

export default function DisabledSwitch() {
  return (
    <div>
      <FormControlLabel control={<Switch />} label="Foo" disabled />
      <Switch disabled />
      <Switch checked disabled />
    </div>
  );
}
