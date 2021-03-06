// @flow weak

import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-next/core/styles';
import TextField from '@material-next/core/TextField';

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});

function Direction() {
  return (
    <MuiThemeProvider theme={theme}>
      <div dir="rtl">
        <TextField label="Name" />
        <input type="text" placeholder="Name" />
      </div>
    </MuiThemeProvider>
  );
}

export default Direction;
