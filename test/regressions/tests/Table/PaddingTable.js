// @flow weak

import React from 'react';
import Grid from '@material-next/core/Grid';
import Paper from '@material-next/core/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from '@material-next/core/Table';
import type { Padding } from '@material-next/core/Table/TableCell';

type Props = {
  padding: Padding,
};

function MyTable(props: Props) {
  const { padding } = props;
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding={padding}>Padding: {padding}</TableCell>
            <TableCell padding={padding} />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell padding={padding}>Dummy Data</TableCell>
            <TableCell padding={padding}>Dummy Data</TableCell>
          </TableRow>
          <TableRow>
            <TableCell padding={padding}>Dummy Data</TableCell>
            <TableCell padding={padding}>Dummy Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

function PaddingTable() {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <MyTable padding="default" />
        </Grid>
        <Grid item xs={6}>
          <MyTable padding="dense" />
        </Grid>
        <Grid item xs={6}>
          <MyTable padding="none" />
        </Grid>
        <Grid item xs={6}>
          <MyTable padding="checkbox" />
        </Grid>
      </Grid>
    </div>
  );
}

export default PaddingTable;
