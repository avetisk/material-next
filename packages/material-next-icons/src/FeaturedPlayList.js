import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '@material-next/core/SvgIcon';

const SvgIconCustom = global.__MUI_SvgIcon__ || SvgIcon;

let FeaturedPlayList = props =>
  <SvgIconCustom {...props}>
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z" />
  </SvgIconCustom>;

FeaturedPlayList = pure(FeaturedPlayList);
FeaturedPlayList.muiName = 'SvgIcon';

export default FeaturedPlayList;