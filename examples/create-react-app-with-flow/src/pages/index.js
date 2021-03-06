// @flow

import React, { Component } from 'react';
import Button from '@material-next/core/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-next/core/Dialog';
import Typography from '@material-next/core/Typography';
import { withStyles } from '@material-next/core/styles';
import withRoot from '../components/withRoot';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

type ProvidedProps = {
  classes: Object,
  theme?: Object,
};

export type Props = {
  classes?: Object,
};

type State = {
  open: boolean,
};

class Index extends Component<ProvidedProps & Props, State> {
  state = {
    open: false,
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleRequestClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography type="display1" gutterBottom>
          Material-Next
        </Typography>
        <Typography type="subheading" gutterBottom>
          example project
        </Typography>
        <Button raised color="accent" onClick={this.handleClick}>
          Super Secret Password
        </Button>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
