// @flow

import React from 'react';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-next/core/Dialog';
import Paper from '@material-next/core/Paper';
import Button from '@material-next/core/Button';

export default function AlertDialog() {
  return (
    <Paper
      elevation={8}
      style={{
        width: 300,
      }}
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Disagree</Button>
        <Button color="primary">Agree</Button>
      </DialogActions>
    </Paper>
  );
}
