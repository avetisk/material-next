// @flow

import React from 'react';
import Avatar from '@material-next/core/Avatar';
import Chip from '@material-next/core/Chip';

export default function DeletableAvatarChip() {
  return <Chip avatar={<Avatar>MB</Avatar>} label="SvgIcon Chip" onRequestDelete={() => {}} />;
}
