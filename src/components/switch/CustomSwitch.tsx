import React from 'react';
import { Switch } from 'react-native';

import { useTheme } from '../../theme/useTheme';
import { CustomSwitchProps } from '../types';

const CustomSwitch = ({ value, onChange, style }: CustomSwitchProps) => {
  const { theme, isDark } = useTheme();

  return (
    <Switch
      style={style}
      value={Boolean(value)}
      onValueChange={onChange}
      trackColor={{
        false: isDark ? '#FFFFFF' : '#D1D1D6',
        true: theme.primary,
      }}
      thumbColor="#FFFFFF"
      ios_backgroundColor={isDark ? '#FFFFFF' : '#D1D1D6'}
    />
  );
};

export default CustomSwitch;
