import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        button: {
          height: 48,
          backgroundColor: '#E50914',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        },

        title: {
          color: '#fff',
          fontSize: 16,
          fontWeight: '700',
        },

        pressed: {
          opacity: 0.8,
        },

        disabled: {
          opacity: 0.5,
        },
        content: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },

        icon: {
          marginRight: 8,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    [],
  );
};

export default useStyles;
