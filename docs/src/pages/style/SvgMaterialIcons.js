// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import AccessAlarmIcon from '@material-next/icons/AccessAlarm';
import ThreeDRotation from '@material-next/icons/ThreeDRotation';
import { withStyles } from '@material-next/core/styles';

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
  },
});

function SvgMaterialIcons(props) {
  const { classes } = props;
  return (
    <div>
      <AccessAlarmIcon className={classes.icon} />
      <ThreeDRotation className={classes.icon} />
    </div>
  );
}

SvgMaterialIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgMaterialIcons);
