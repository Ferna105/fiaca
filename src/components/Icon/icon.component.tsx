import React from 'react';
import {IconProps} from './icon.interfaces';
import {View, ViewProps} from 'react-native';
import * as Icons from './assets/icon.assets';
import {Sizing} from '../../utils/sizing';
import {Colors} from 'utils/colors';

export const Icon = ({name, size, color, ...props}: ViewProps & IconProps) => {
  const IconComponent = Icons[name].default;

  return (
    <View {...props}>
      <IconComponent
        width={size && Sizing[size]}
        height={size && Sizing[size]}
        fill={Colors[color]}
      />
    </View>
  );
};
