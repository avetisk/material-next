import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '@material-next/core/SvgIcon';

const SvgIconCustom = global.__MUI_SvgIcon__ || SvgIcon;

let AirlineSeatLegroomNormal = props =>
  <SvgIconCustom {...props}>
    <path d="M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
  </SvgIconCustom>;

AirlineSeatLegroomNormal = pure(AirlineSeatLegroomNormal);
AirlineSeatLegroomNormal.muiName = 'SvgIcon';

export default AirlineSeatLegroomNormal;