import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '@material-next/core/SvgIcon';

const SvgIconCustom = global.__MUI_SvgIcon__ || SvgIcon;

let Transform = props =>
  <SvgIconCustom {...props}>
    <path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z" />
  </SvgIconCustom>;

Transform = pure(Transform);
Transform.muiName = 'SvgIcon';

export default Transform;
