// @flow

import React from 'react';
import type { Element } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import withStyles from '../styles/withStyles';

export const styles = (theme: Object) => ({
  root: {
    width: 36,
    height: 36,
    fontSize: theme.typography.pxToRem(18),
    marginRight: 4,
  },
  icon: {
    width: 20,
    height: 20,
    fontSize: theme.typography.pxToRem(20),
  },
});

type ProvidedProps = {
  classes: Object,
  /**
   * @ignore
   */
  theme?: Object,
};

export type Props = {
  /**
   * The content of the component, normally `Avatar`.
   */
  children: Element<any>,
  /**
   * Useful to extend the style applied to components.
   */
  classes?: Object,
  /**
   * @ignore
   */
  className?: string,
};

/**
 * It's a simple wrapper to apply the `dense` mode styles to `Avatar`.
 */
function ListItemAvatar(props: ProvidedProps & Props, context: { dense: boolean }) {
  if (context.dense === undefined) {
    warning(
      false,
      `Material-Next: <ListItemAvatar> is a simple wrapper to apply the dense styles
      to <Avatar>. You do not need it unless you are controlling the <List> dense property.`,
    );
    return props.children;
  }

  const { children, classes, className: classNameProp, ...other } = props;

  return React.cloneElement(children, {
    className: classNames(
      { [classes.root]: context.dense },
      classNameProp,
      children.props.className,
    ),
    childrenClassName: classNames(
      { [classes.icon]: context.dense },
      children.props.childrenClassName,
    ),
    ...other,
  });
}

ListItemAvatar.contextTypes = {
  dense: PropTypes.bool,
};

ListItemAvatar.muiName = 'ListItemAvatar';

export default withStyles(styles, { name: 'MuiListItemAvatar' })(ListItemAvatar);
