import {Sizing} from '../../utils/sizing';
import {Colors} from '../../utils/colors';

export interface TextProps {
  fontSize?: keyof typeof Sizing;
  color?: keyof typeof Colors;
  fontWeight?: 'bold' | 'normal';
}
