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
          paddingHorizontal: moderateScale(14),
        },
        searchBox: {
          height: moderateScale(48),
          marginTop: moderateScale(15),
          marginBottom: moderateScale(15),
          paddingHorizontal: moderateScale(12),

          flexDirection: 'row',
          alignItems: 'center',

          backgroundColor: theme.card,
          borderRadius: moderateScale(12),

          borderWidth: StyleSheet.hairlineWidth,
          borderColor: theme.border,
        },

        input: {
          flex: 1,
          marginLeft: moderateScale(8),
          fontSize: moderateScale(15),
          color: theme.text,
          paddingVertical: 0,
        },

        clear: {
          fontSize: moderateScale(28),
          color: theme.subText,
          lineHeight: moderateScale(28),
        },

        loader: {
          marginTop: moderateScale(30),
        },

        loaderContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.background,
        },

        row: {
          justifyContent: 'space-between',
          marginBottom: moderateScale(14),
        },

        emptyContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
        },

        emptyText: {
          fontSize: moderateScale(16),
          color: theme.subText,
          fontWeight: '600',
          textAlign: 'center',
        },

        errorContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: moderateScale(20),
          backgroundColor: theme.background,
        },

        errorText: {
          fontSize: moderateScale(16),
          color: theme.primary,
          fontWeight: '600',
          textAlign: 'center',
        },
      }),
    [theme],
  );
};

export default useStyles;
