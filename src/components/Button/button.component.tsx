import React from 'react';

import {
  ColorValue,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {styles} from './button.styles';
import {Icons} from '../Icon/icon.interfaces';
import {Colors} from '../../utils/colors';
import {Sizing} from '../../utils/sizing';
import {Icon} from '../Icon/icon.component';
import {Text} from '../Text/text.component';

export enum ButtonTypes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
}

interface ButtonProps {
  text: string;
  type: keyof typeof ButtonTypes;
  icon?: keyof typeof Icons;
}

export const Button = ({
  icon,
  text,
  type,
  ...props
}: TouchableOpacityProps & ButtonProps) => {
  const typeColors: {
    [key in ButtonTypes]: {
      background: ColorValue;
      text: ColorValue;
    };
  } = {
    [ButtonTypes.PRIMARY]: {background: Colors.Violet, text: Colors.White},
    [ButtonTypes.SECONDARY]: {background: Colors.Yellow, text: Colors.DarkGray},
    [ButtonTypes.TERTIARY]: {background: Colors.DarkGray, text: Colors.White},
  };

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.touchable,
        {
          backgroundColor: typeColors[type].background,
          padding: Sizing.M,
          borderRadius: Sizing.XXS,
        },
      ]}>
      {icon && <Icon size="XXL" name={icon} style={styles.icon} />}
      <Text style={styles.text} color={typeColors[type].text} fontWeight="bold">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
