import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '@material-next/core/SvgIcon';

const SvgIconCustom = global.__MUI_SvgIcon__ || SvgIcon;

let HdrStrong = props =>
  <SvgIconCustom {...props}>
    <path d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </SvgIconCustom>;

HdrStrong = pure(HdrStrong);
HdrStrong.muiName = 'SvgIcon';

export default HdrStrong;
