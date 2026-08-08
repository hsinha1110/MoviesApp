import React from 'react';
import { Pressable, Text, ActivityIndicator, View } from 'react-native';

import useStyles from './styles';
import { AppButtonProps } from '../types';
import { useTheme } from '../../theme/useTheme';

const AppButton = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
  leftIcon,
}: AppButtonProps) => {
  const { theme } = useTheme();
  const styles = useStyles(theme);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={theme.text} />
      ) : (
        <View style={styles.content}>
          {leftIcon && leftIcon}

          <Text style={[styles.title, textStyle]}>
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default React.memo(AppButton);