import {Colors} from 'utils/colors';
import {Sizing} from '../../utils/sizing';

export enum Icons {
  Google = 'Google',
  Calendar = 'Calendar',
  Fiaca = 'Fiaca',
  FiacaI = 'FiacaI',
}

export interface IconProps {
  name: keyof typeof Icons;
  size?: keyof typeof Sizing;
  color: keyof typeof Colors;
}
