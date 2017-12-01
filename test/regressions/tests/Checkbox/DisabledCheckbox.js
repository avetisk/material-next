// @flow

import React from 'react';
import Checkbox from '@material-next/core/Checkbox';
import { FormControlLabel } from '@material-next/core/Form';

export default function DisabledCheckbox() {
  return (
    <div>
      <FormControlLabel disabled control={<Checkbox />} label="Foo" />
      <Checkbox disabled />
      <Checkbox checked disabled />
    </div>
  );
}
