import React from 'react';
import {Text as TextBase, TextProps as TextDefaultProps} from 'react-native';
import {TextProps} from './text.interfaces';
import {Sizing} from '../../utils/sizing';
import {Colors} from '../../utils/colors';

export const Text = ({
  style,
  fontSize = 'M',
  fontWeight = 'normal',
  color = 'White',
  ...props
}: TextDefaultProps & TextProps) => {
  return (
    <TextBase
      {...props}
      style={[
        style,
        {
          color: Colors[color],
          fontSize: Sizing[fontSize],
          fontWeight: fontWeight,
        },
      ]}
    />
  );
};
