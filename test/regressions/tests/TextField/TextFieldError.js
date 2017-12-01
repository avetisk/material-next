// @flow

import React from 'react';
import TextField from '@material-next/core/TextField';

export default function TextFieldError() {
  return (
    <div>
      <TextField error label="Foo" />
      <TextField error label="Foo" value="Hello world" />
    </div>
  );
}
