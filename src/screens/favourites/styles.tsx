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

        heading: {
          fontSize: moderateScale(24),
          fontWeight: '700',
          color: theme.text,
          marginTop: moderateScale(70),
          marginBottom: moderateScale(15),
        },

        row: {
          justifyContent: 'space-between',
          marginBottom: moderateScale(14),
        },

        emptyContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },

        emptyText: {
          fontSize: moderateScale(20),
          color: theme.subText,
          fontWeight: 'bold',
        },

        cardShadow: {
          borderRadius: moderateScale(12),
          backgroundColor: theme.card,

          elevation: moderateScale(6),

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: moderateScale(3),
          },
          shadowOpacity: 0.18,
          shadowRadius: moderateScale(6),
        },
      }),
    [theme],
  );
};

export default useStyles;
