// @flow weak

import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-next/core/styles';
import Typography from '@material-next/core/Typography';

function theme() {
  return createMuiTheme({
    typography: {
      htmlFontSize: 10,
    },
  });
}

function FontSizeTheme() {
  return (
    <MuiThemeProvider theme={theme}>
      <Typography type="body1">body1</Typography>
    </MuiThemeProvider>
  );
}

export default FontSizeTheme;
