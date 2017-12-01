// @flow

import React from 'react';
import Radio from '@material-next/core/Radio';
import { FormControlLabel } from '@material-next/core/Form';

export default function DisabledRadio() {
  return (
    <div>
      <FormControlLabel disabled control={<Radio />} label="Foo" />
      <Radio disabled />
      <Radio checked disabled />
    </div>
  );
}
