import React, { ReactNode } from 'react';
import { Pressable, Text, ActivityIndicator, View } from 'react-native';
import useStyles from './styles';
import { AppButtonProps } from '../../types';

const AppButton = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
  leftIcon,
}: AppButtonProps) => {
  const styles = useStyles();

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
        <ActivityIndicator color="#fff" />
      ) : (
        <View style={styles.content}>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}

          <Text style={[styles.title, textStyle]}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default React.memo(AppButton);
