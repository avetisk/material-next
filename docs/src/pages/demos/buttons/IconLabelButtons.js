// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-next/core/Button';
import { withStyles } from '@material-next/core/styles';
import Delete from '@material-next/icons/Delete';
import Done from '@material-next/icons/Done';
import FileUpload from '@material-next/icons/FileUpload';
import KeyboardVoice from '@material-next/icons/KeyboardVoice';
import Save from '@material-next/icons/Save';
import Send from '@material-next/icons/Send';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function IconLabelButtons(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <Button className={classes.button} raised color="accent">
          Delete
          <Delete className={classes.rightIcon} />
        </Button>
        <Button className={classes.button} raised color="primary">
          Send
          <Send className={classes.rightIcon} />
        </Button>
        <Button className={classes.button} raised color="default">
          Upload
          <FileUpload className={classes.rightIcon} />
        </Button>
      </div>
      <div>
        <Button className={classes.button} raised color="contrast">
          <Done className={classes.leftIcon} />
          Done
        </Button>
        <Button className={classes.button} raised disabled color="accent">
          <KeyboardVoice className={classes.leftIcon} />
          Talk
        </Button>
        <Button className={classes.button} raised dense>
          <Save className={classes.leftIcon} />
          Save
        </Button>
      </div>
    </div>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);
