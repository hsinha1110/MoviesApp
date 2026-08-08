import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';

const useStyles = (theme: any) => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.background,
        },

        emptyContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: moderateScale(30),
        },

        title: {
          marginTop: moderateScale(18),
          fontSize: moderateScale(22),
          fontWeight: '700',
          color: theme.text,
        },

        description: {
          marginTop: moderateScale(8),
          fontSize: moderateScale(14),
          color: theme.subText,
          textAlign: 'center',
        },
      }),
    [theme],
  );
};

export default useStyles;
