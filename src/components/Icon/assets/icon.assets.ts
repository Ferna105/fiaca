import {FunctionComponent} from 'react';
import {SvgProps} from 'react-native-svg';

interface SvgIcon {
  default: FunctionComponent<SvgProps>;
}

export const Google = require('./google.svg') as SvgIcon;
export const Calendar = require('./calendar.svg') as SvgIcon;
export const Fiaca = require('./fiaca.svg') as SvgIcon;
export const FiacaI = require('./fiacaI.svg') as SvgIcon;
