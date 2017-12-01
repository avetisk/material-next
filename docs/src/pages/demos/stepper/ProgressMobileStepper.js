/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-next/core/styles';
import MobileStepper from '@material-next/core/MobileStepper';
import Button from '@material-next/core/Button';
import KeyboardArrowLeft from '@material-next/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-next/icons/KeyboardArrowRight';

const styles = {
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
};

class ProgressMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <MobileStepper
        type="progress"
        steps={6}
        position="static"
        activeStep={this.state.activeStep}
        className={classes.root}
        nextButton={
          <Button dense onClick={this.handleNext} disabled={this.state.activeStep === 5}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button dense onClick={this.handleBack} disabled={this.state.activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    );
  }
}

ProgressMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ProgressMobileStepper);
