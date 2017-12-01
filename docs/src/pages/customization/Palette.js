// @flow weak

import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-next/core/styles';
import purple from '@material-next/core/colors/purple';
import green from '@material-next/core/colors/green';
import red from '@material-next/core/colors/red';
import Button from '@material-next/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: purple, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
});

function Palette() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Button color="primary">Primary</Button>
        <Button color="accent">Accent</Button>
      </div>
    </MuiThemeProvider>
  );
}

export default Palette;
