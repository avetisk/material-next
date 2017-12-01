// @flow

import React from 'react';
import { FormLabel, FormControl, FormControlLabel } from '@material-next/core/Form';
import Radio, { RadioGroup } from '@material-next/core/Radio';

export default function RadioGroupWithLabelError() {
  return (
    <FormControl style={{ width: 100 }} required error>
      <FormLabel>Location</FormLabel>
      <RadioGroup value="home">
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
      </RadioGroup>
    </FormControl>
  );
}
