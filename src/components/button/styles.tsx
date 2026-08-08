import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';

const useStyles = (theme: any) => {
  return useMemo(
    () =>
      StyleSheet.create({
        button: {
          height: moderateScale(48),
          backgroundColor: theme.primary,
          borderRadius: moderateScale(8),
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
        },

        title: {
          color: theme.text,
          fontSize: moderateScale(16),
          fontWeight: '700',
          marginHorizontal: moderateScale(10),
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
          marginRight: moderateScale(8),
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    [theme],
  );
};

export default useStyles;
