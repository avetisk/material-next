// @flow

import React from 'react';
import TextField from '@material-next/core/TextField';

export default function TextFieldMultiline() {
  return <TextField label="Foo" multiline rows={4} value="Default text" />;
}
