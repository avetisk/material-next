// @flow

import React from 'react';
import { FormControlLabel } from '@material-next/core/Form';
import Radio, { RadioGroup } from '@material-next/core/Radio';

export default function SimpleRadioGroup() {
  return (
    <div style={{ width: 100 }}>
      <RadioGroup value="home">
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
      </RadioGroup>
    </div>
  );
}
