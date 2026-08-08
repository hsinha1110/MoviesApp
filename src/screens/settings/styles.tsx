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
          paddingHorizontal: moderateScale(16),
        },

        heading: {
          fontSize: moderateScale(26),
          fontWeight: '700',
          color: theme.text,
          marginTop: moderateScale(20),
          marginBottom: moderateScale(22),
        },

        sectionTitle: {
          fontSize: moderateScale(14),
          fontWeight: '700',
          color: theme.subText,
          marginBottom: moderateScale(10),
          marginLeft: moderateScale(4),
        },

        section: {
          backgroundColor: theme.card,
          borderRadius: moderateScale(12),
          overflow: 'hidden',
          marginBottom: moderateScale(24),
        },

        option: {
          minHeight: moderateScale(58),
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: moderateScale(14),
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: theme.border,
        },

        optionText: {
          flex: 1,
          marginLeft: moderateScale(12),
          fontSize: moderateScale(15),
          fontWeight: '500',
          color: theme.text,
        },

        switch: {
          marginTop: moderateScale(15),
        },
      }),
    [theme],
  );
};

export default useStyles;
